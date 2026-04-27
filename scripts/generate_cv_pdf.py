import os
from pathlib import Path
try:
    from fpdf import FPDF
except ImportError:
    print("fpdf2 library not found. Please install via: pip install fpdf2")
    exit(1)

class CV(FPDF):
    def footer(self):
        self.set_y(-18)
        self.set_font('TimesNewRoman', '', 9)
        self.set_text_color(107, 114, 128)
        self.set_draw_color(209, 213, 219)
        self.set_line_width(0.2)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.set_y(-16)
        self.cell(0, 10, "Dohyun Hwang | Curriculum Vitae", align="L")
        self.set_y(-16)
        self.cell(0, 10, f"Page {self.page_no()}", align="R")

def section(pdf, title):
    pdf.ln(6)
    pdf.set_font("TimesNewRoman", "B", 11)
    pdf.set_text_color(15, 23, 42)
    pdf.set_draw_color(15, 23, 42)
    pdf.set_line_width(0.3)
    
    y = pdf.get_y()
    pdf.line(pdf.l_margin, y, pdf.w - pdf.r_margin, y)
    pdf.ln(1.5)
    pdf.cell(0, 6, title.upper(), new_x="LMARGIN", new_y="NEXT")
    y = pdf.get_y()
    pdf.line(pdf.l_margin, y, pdf.w - pdf.r_margin, y)
    pdf.ln(3)

def gutter_entry(pdf, left_text, title, subtitle="", body=None, bullets=None, is_pill=False):
    body = body or []
    bullets = bullets or []
    pdf.set_font("TimesNewRoman", "", 9.5)
    
    doc = pdf
    y_start = doc.get_y()
    gutter_width = 30
    content_x = doc.l_margin + gutter_width + 4
    
    # Left Gutter
    if is_pill and left_text:
        doc.set_font("TimesNewRoman", "B", 8)
        w = doc.get_string_width(left_text) + 6
        x = doc.l_margin + gutter_width - w
        doc.set_fill_color(229, 231, 235)
        doc.set_text_color(55, 65, 81)
        doc.set_xy(x, y_start + 0.5)
        # draw pill-like rect
        doc.cell(w, 4, left_text, align="C", fill=True)
        doc.set_text_color(0, 0, 0)
    else:
        doc.set_xy(doc.l_margin, y_start)
        doc.set_font("TimesNewRoman", "I", 9.5)
        doc.set_text_color(51, 65, 85)
        doc.cell(gutter_width, 5, left_text, align="R")
        doc.set_text_color(0, 0, 0)
    
    # Right Content
    doc.set_left_margin(content_x)
    doc.set_xy(content_x, y_start)
    if title:
        doc.set_font("TimesNewRoman", "B", 10.5)
        doc.set_text_color(17, 24, 39)
        doc.multi_cell(0, 5, title, new_x="LMARGIN", new_y="NEXT")
    
    if subtitle:
        doc.set_font("TimesNewRoman", "I", 9.5)
        doc.set_text_color(55, 65, 81)
        doc.multi_cell(0, 4.5, subtitle, new_x="LMARGIN", new_y="NEXT")
    
    doc.set_font("TimesNewRoman", "", 9.5)
    doc.set_text_color(31, 41, 55)
    for p in body:
        doc.multi_cell(0, 4.5, p, new_x="LMARGIN", new_y="NEXT")
    
    for b in bullets:
        y_before = doc.get_y()
        doc.cell(3, 4.5, "- ")
        doc.set_left_margin(content_x + 3)
        doc.set_xy(content_x + 3, y_before)
        doc.multi_cell(0, 4.5, b, new_x="LMARGIN", new_y="NEXT")
        doc.set_left_margin(content_x)
    
    doc.ln(3)
    doc.set_left_margin(18) # reset back to original LMARGIN

def build_pdf(target_path, photo_path=None):
    pdf = CV(orientation="P", unit="mm", format="A4")
    pdf.set_margins(18, 18, 18)
    pdf.add_page()
    
    # Fonts
    pdf.add_font("TimesNewRoman", "", "C:/Windows/Fonts/times.ttf")
    pdf.add_font("TimesNewRoman", "B", "C:/Windows/Fonts/timesbd.ttf")
    pdf.add_font("TimesNewRoman", "I", "C:/Windows/Fonts/timesi.ttf")
    pdf.add_font("TimesNewRoman", "BI", "C:/Windows/Fonts/timesbi.ttf")
    pdf.add_font("Batang", "", "C:/Windows/Fonts/batang.ttc")
    pdf.set_fallback_fonts(["Batang"])
    
    # Header Photo
    photo_x = 18
    photo_y = 18
    photo_width = 28
    photo_height = 36
    if photo_path and photo_path.exists():
        pdf.set_fill_color(229, 231, 235)
        pdf.rect(photo_x - 1, photo_y - 1, photo_width + 2, photo_height + 2, "F")
        pdf.image(str(photo_path), x=photo_x, y=photo_y, w=photo_width, h=photo_height)
    
    # Header Text
    info_x = photo_x + photo_width + 8
    pdf.set_xy(info_x, photo_y + 3)
    pdf.set_font("TimesNewRoman", "B", 24)
    pdf.set_text_color(15, 23, 42)
    w = pdf.get_string_width("DOHYUN HWANG ")
    pdf.cell(w, 10, "DOHYUN HWANG ")
    pdf.set_font("TimesNewRoman", "", 24)
    pdf.cell(0, 10, "(黃棹炫)", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_xy(info_x, pdf.get_y() + 2)
    pdf.set_font("TimesNewRoman", "I", 10.5)
    pdf.set_text_color(51, 65, 85)
    pdf.cell(0, 6, "Undergraduate Researcher @ Yonsei University Mirae Campus", new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_xy(info_x, pdf.get_y() + 2)
    pdf.set_font("TimesNewRoman", "", 9.5)
    pdf.set_text_color(17, 24, 39)
    
    links = [
        ("Email", "ezwez1467@yonsei.ac.kr", "mailto:ezwez1467@yonsei.ac.kr"),
        ("GitHub", "github.com/ezwez1203", "https://github.com/ezwez1203"),
        ("LinkedIn", "linkedin.com/in/lucius-hw", "https://linkedin.com/in/lucius-hw"),
        ("Website", "whereclass.me", "https://whereclass.me")
    ]
    
    for i, (name, text, url) in enumerate(links):
        w = pdf.get_string_width(text)
        pdf.cell(w, 5, text, link=url)
        if i < len(links) - 1:
            sep = "  •  "
            pdf.cell(pdf.get_string_width(sep), 5, sep)
            
    pdf.set_y(photo_y + photo_height + 4)
    
    # About Me
    pdf.set_font("TimesNewRoman", "", 9.8)
    pdf.set_text_color(31, 41, 55)
    about = "I am an undergraduate researcher focused on artificial intelligence, federated learning, autonomous driving, topological data analysis, and medical data analysis. I approach research through technically grounded experimentation, cross-domain applicability, and careful translation from methodological ideas to realistic use cases."
    pdf.multi_cell(0, 5, about, new_x="LMARGIN", new_y="NEXT")
    
    # Experience
    section(pdf, "Experience")
    gutter_entry(
        pdf,
        "2024 - Present",
        "CTO / AI & Web Developer",
        "Futurevle.Co",
        bullets=[
            "Led AI and web development initiatives across company projects.",
            "Contributed to technical decision-making, system design, and implementation planning.",
            "Worked on AI-powered services and web-based development projects with a focus on practical deployment."
        ]
    )

    # Education
    section(pdf, "Education")
    gutter_entry(
        pdf,
        "2022 - Present",
        "Yonsei University Mirae Campus",
        "Undergraduate Student",
        body=[
            "Pursuing rigorous training in computing, mathematics, and applied AI. Current coursework explores algorithms, system programming, AI mathematics, and data structures."
        ]
    )
    gutter_entry(
        pdf, "Mar 2019 - Feb 2022", "Hyundai High School", "",
        bullets=[
            "Developed strong interests in science, mathematics, computing, and analytical thinking.",
            "Received school-level awards and recognitions through academic and extracurricular activities.",
            "Grade 10: Korean Language, Mathematics, English, Korean History, Integrated Social Studies, Integrated Science, Scientific Inquiry and Experimentation, Informatics, Japanese I, Physical Education, Music, Art Creation",
            "Grade 11: Literature, Reading, Mathematics I, Mathematics II, Probability and Statistics, English I, English II, Physics I, Chemistry I, Life Science I, Exercise and Health, Music",
            "Grade 11 Career Elective: Geometry, Life and Science, Japanese II",
            "Grade 12: Speech and Composition, Calculus, English Reading and Writing, Korean History, Life and Ethics, Education, Essay Writing, Sports Life",
            "Grade 12 Career Elective: Classic Reading, Mathematical Inquiry and Research, Social Issues Exploration, Life Science II, Advanced Life Science"
        ]
    )
    
    # Publications
    section(pdf, "Publications")
    gutter_entry(
        pdf, "Accepted",
        "Adversarial Robustness Analysis of Deep Learning-Based Automatic Modulation Classification in Wireless Communication",
        "IEEE ICAIIC 2026",
        body=[
            "Sunjun Hwang, Eunho Choi, and Dohyun Hwang. Accepted Dec 21, 2025.",
            "Contributed to the study of adversarial robustness in DL-based automatic modulation classification systems for wireless environments."
        ],
        is_pill=True
    )
    
    # Current Research
    section(pdf, "Current Research")
    gutter_entry(
        pdf, "2025 - Present",
        "Autonomous Driving + Federated Learning (Heterogeneous Models)", "",
        bullets=[
            "Investigating federated learning settings in which heterogeneous models are trained within the same driving environment.",
            "Analyzing knowledge transfer dynamics, representation compatibility, and performance convergence across different model families."
        ]
    )
    gutter_entry(
        pdf, "2026 - Present",
        "Topological Data Analysis for Medical Data Analysis", "",
        bullets=[
            "Applying TDA to BRCA breast cancer datasets to identify latent geometric and relational structures not readily captured by conventional statistics."
        ]
    )
    gutter_entry(
        pdf, "2026 - Present",
        "Mamba-Based Autonomous Vehicle", "",
        bullets=[
            "Exploring Mamba-based State Space Model architectures for perception and decision-making in autonomous driving."
        ]
    )

    # Awards & Honors
    section(pdf, "Awards & Honors")
    gutter_entry(pdf, "2026", "HIRA Big Data Global Talent Program, Grand Prize", "Health Insurance Review & Assessment Service | HIRA President's Award")
    gutter_entry(pdf, "2025", "Gangwon Province Startup Competition, Grand Prize", "Gangwon Special Self-Governing Province | Governor's Award")
    gutter_entry(pdf, "2025", "Yonsei MEDICI+ Startup Hackathon, Grand Prize", "Yonsei University")
    
    pdf.output(target_path)

if __name__ == "__main__":
    root = Path(__file__).resolve().parents[1]
    target = root / "public" / "docs" / "Dohyun_Hwang_CV.pdf"
    photo_path = root / "src" / "assets" / "images" / "KakaoTalk_20260426_022255023.png"
    target.parent.mkdir(parents=True, exist_ok=True)
    build_pdf(target, photo_path)
