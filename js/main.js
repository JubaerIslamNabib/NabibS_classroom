const QUIZ_LINKS = {
  "higher-math-1st-straight-line": "https://forms.gle/k7P9QtRrHDRpicBY8",
  "higher-math-1st-circle": "https://forms.gle/CHRbEKqtoeZDH7aK9",
  "higher-math-1st-trigonometry": "https://forms.gle/jPB57SgQrED9SnSp6",
  "higher-math-1st-differential-calculus": "https://forms.gle/AxASMQ2aEJ8TQB6x9",
  "physics-1st-newtonian-mechanics": "https://forms.gle/AZR5XHprHZaYGZXh6",
  "physics-1st-work-energy-and-power": "https://forms.gle/184U34V43EK8tPyR7",
  "physics-1st-gravitation": "https://forms.gle/aYufzhLfZQAy4Ntz7",
  "physics-1st-properties-of-matter": "https://forms.gle/gg3iXTWRMnvt9FpD8",
  "physics-1st-periodic-motion": "https://forms.gle/Dxa7qEQcLmNDVHnW7",
  "physics-1st-wave": "https://forms.gle/r5SRufkvTpkMas1A7"
};

const SUBJECTS = {
  "higher-math-1st": {
    title: "Higher Math 1st Paper",
    page: "higher-math-1st.html",
    type: "math",
    chapters: [
      "Matrix and Determinant",
      "Vector",
      "Straight Line",
      "Circle",
      "Permutation and Combination",
      "Trigonometry",
      "Function and Graph",
      "Differential Calculus",
      "Integral Calculus"
    ]
  },
  "higher-math-2nd": {
    title: "Higher Math 2nd Paper",
    page: "higher-math-2nd.html",
    type: "math",
    chapters: [
      "Real Number and Inequality",
      "Complex Number",
      "Polynomial and Polynomial Equation",
      "Two-Dimensional Geometry",
      "Binomial Expansion",
      "Conic Section",
      "Inverse Trigonometric Function",
      "Statics",
      "Dynamics"
    ]
  },
  "physics-1st": {
    title: "Physics 1st Paper",
    page: "physics-1st.html",
    type: "physics",
    chapters: [
      "Physical World and Measurement",
      "Vector",
      "Motion",
      "Newtonian Mechanics",
      "Work, Energy and Power",
      "Gravitation",
      "Properties of Matter",
      "Periodic Motion",
      "Wave",
      "Ideal Gas and Kinetic Theory"
    ]
  },
  "physics-2nd": {
    title: "Physics 2nd Paper",
    page: "physics-2nd.html",
    type: "physics",
    chapters: [
      "Thermodynamics",
      "Electrostatics",
      "Current Electricity",
      "Magnetic Effect of Current",
      "Electromagnetic Induction",
      "Geometrical Optics",
      "Physical Optics",
      "Modern Physics",
      "Atom Model and Nuclear Physics",
      "Semiconductor and Electronics"
    ]
  }
};

const CHAPTER_PDFS = {
  "higher-math-1st-matrix-and-determinant": {
    title: "Matrix and Determinant PDF",
    file: "assets/pdfs/matrix-and-determinant.pdf",
    pdfOnly: true
  },
  "higher-math-1st-trigonometry": {
    title: "Trigonometry PDF",
    file: "assets/pdfs/trigonometry.pdf",
    pdfOnly: true
  },
  "higher-math-1st-straight-line": {
    title: "Straight Line PDF",
    file: "assets/pdfs/straight-line.pdf",
    pdfOnly: true
  },
  "higher-math-1st-circle": {
    title: "Circle PDF",
    file: "assets/pdfs/circle.pdf",
    pdfOnly: true
  }
};

const ICONS = {
  book: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
  calculator: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
  pi: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14"/><path d="M8 7v10"/><path d="M16 7v10"/><path d="M16 17c0 1.4.8 2 2 2"/></svg>',
  matrix: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>',
  sigma: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 4H7l6 8-6 8h11"/><path d="M7 4h11"/><path d="M7 20h11"/></svg>',
  functionGraph: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M7 16c3-9 6-9 10 0"/><path d="M8 8h.01"/><path d="M17 8h.01"/></svg>',
  geometry: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16L12 4 4 20z"/><path d="M12 4v16"/><path d="M8 14h8"/></svg>',
  atom: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="1.5"/><path d="M20 12c0 2-3.6 3.5-8 3.5S4 14 4 12s3.6-3.5 8-3.5 8 1.5 8 3.5z"/><path d="M16 19c-1.8 1-5.3-1.5-7.7-5.5S4.6 6 6.4 5s5.3 1.5 7.7 5.5S17.8 18 16 19z"/><path d="M8 19c1.8 1 5.3-1.5 7.7-5.5S19.4 6 17.6 5 12.3 6.5 9.9 10.5 6.2 18 8 19z"/></svg>',
  pendulum: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v3"/><path d="M12 6 7 17"/><circle cx="7" cy="18" r="2"/><path d="M5 21h14"/><path d="M8 6h8"/><path d="M16 6c2.2 2.8 2.5 6.6.7 9.7"/></svg>',
  magnet: '<svg class="icon magnet-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M18 10h12v21c0 8 5 13 12 13s12-5 12-13V10h12v21c0 15-11 27-24 27S18 46 18 31V10z" transform="rotate(45 32 32)" fill="#ff3b45" stroke="none"/><path d="M15 9h13v11H15z" transform="rotate(45 21.5 14.5)" fill="#dff6fb" stroke="none"/><path d="M49 9h13v11H49z" transform="rotate(45 55.5 14.5)" fill="#dff6fb" stroke="none"/><path d="M42 12 30 27h10l-6 15 17-21H40l2-9z" fill="#00d7c8" stroke="none"/></svg>',
  circuit: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h4"/><path d="M14 7h4"/><path d="M10 7a2 2 0 0 0 4 0"/><path d="M6 17h4"/><path d="M14 17h4"/><path d="M10 17a2 2 0 0 1 4 0"/><path d="M6 7v10"/><path d="M18 7v10"/></svg>',
  motion: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17h9"/><path d="M4 12h13"/><path d="M4 7h7"/><path d="m15 8 4 4-4 4"/></svg>',
  wave: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12c2.5-6 5.5 6 8 0s5.5 6 8 0"/><path d="M3 18c2.5-6 5.5 6 8 0s5.5 6 8 0"/></svg>',
  lens: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c4 4 4 14 0 18"/><path d="M12 3c-4 4-4 14 0 18"/><path d="M3 12h6"/><path d="M15 12h6"/></svg>',
  clipboard: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',
  gamepad: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h4"/><path d="M8 10v4"/><path d="M15 13h.01"/><path d="M18 11h.01"/><rect x="2" y="7" width="20" height="10" rx="5"/><path d="m7 17-1 3"/><path d="m17 17 1 3"/></svg>',
  graduation: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/></svg>',
  list: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>',
  play: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
  external: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  download: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  print: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>',
  copy: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="2" y="2" width="13" height="13" rx="2"/></svg>',
  arrowLeft: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
  arrowUp: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>'
};

function slugify(text) {
  return text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function chapterSlug(subjectKey, title) {
  return `${subjectKey}-${slugify(title)}`;
}

function quizLinkFor(subjectKey, title) {
  return QUIZ_LINKS[chapterSlug(subjectKey, title)] || "";
}

function chapterDescription(subject, title) {
  return `Important formulas and quick revision notes for ${title} in ${subject.title}.`;
}

function isChapterPage() {
  return location.pathname.includes("/chapters/");
}

function pagePrefix() {
  return isChapterPage() ? "../" : "";
}

function renderChapterList() {
  const key = document.body.dataset.chapters;
  const list = document.querySelector("#chapter-list");
  if (!key || !list) return;
  const subject = SUBJECTS[key];
  list.innerHTML = subject.chapters.map((title, index) => {
    const slug = chapterSlug(key, title);
    return `
      <article class="card">
        <div class="chapter-top">
          <span class="chapter-number">${index + 1}</span>
        </div>
        <h2>${title}</h2>
        <p>${chapterDescription(subject, title)}</p>
        <a class="btn btn-card" href="chapters/${slug}.html">View Formula Sheet</a>
      </article>
    `;
  }).join("");
}

function renderQuizSections() {
  const target = document.querySelector("#quiz-sections");
  if (!target) return;
  target.innerHTML = Object.entries(SUBJECTS).map(([key, subject]) => `
    <section class="content-block" id="${key}">
      <div class="section-heading compact">
        <h2>${subject.title} Quizzes</h2>
        <p>Start available chapter-wise exams. Other chapter exams are coming soon.</p>
      </div>
      <div class="card-grid four">
        ${subject.chapters.map((title, index) => {
          const link = quizLinkFor(key, title);
          const action = link
            ? `<a class="btn btn-card" href="${link}" target="_blank" rel="noopener">Start Quiz</a>`
            : `<span class="btn btn-card btn-disabled" aria-disabled="true">Coming Soon</span>`;
          return `
            <article class="card">
              <span class="chapter-number">${index + 1}</span>
              <h3>${title}</h3>
              <p>Practice important MCQ and short questions from ${title}.</p>
              ${action}
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function renderAvailableQuizzes() {
  const target = document.querySelector("#available-quizzes");
  if (!target) return;

  const available = Object.entries(SUBJECTS).flatMap(([subjectKey, subject]) =>
    subject.chapters
      .map((title, index) => ({
        title,
        index,
        subjectTitle: subject.title,
        link: quizLinkFor(subjectKey, title)
      }))
      .filter((quiz) => quiz.link)
  );

  target.innerHTML = `
    <section class="content-block" id="available-quizzes-list">
      <div class="section-heading compact">
        <h2>Available Quizzes</h2>
        <p>Start the exams that are ready now.</p>
      </div>
      <div class="card-grid four">
        ${available.map((quiz) => `
          <article class="card">
            <span class="tag">${quiz.subjectTitle}</span>
            <span class="chapter-number">${quiz.index + 1}</span>
            <h3>${quiz.title}</h3>
            <p>${quiz.subjectTitle} exam form is available.</p>
            <a class="btn btn-card" href="${quiz.link}" target="_blank" rel="noopener">Start Quiz</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function findChapterBySlug(slug) {
  for (const [subjectKey, subject] of Object.entries(SUBJECTS)) {
    const index = subject.chapters.findIndex((title) => chapterSlug(subjectKey, title) === slug);
    if (index >= 0) return { subjectKey, subject, title: subject.chapters[index], index };
  }
  return null;
}

const PDF_MATH_FORMULAS = {
  matrix: [
    ["ম্যাট্রিক্সের ধর্ম: Transpose of a Transpose", "(A^T)^T = A", "Taking transpose twice returns the original matrix.", [["A", "given matrix"], ["A^T", "transpose of A"]]],
    ["ম্যাট্রিক্সের ধর্ম: Transpose of Product", "(AB)^T = B^T A^T", "The transpose of a product reverses the order of multiplication. Here A has order m x n and B has order n x p.", [["A, B", "matrices with compatible orders"]]],
    ["ম্যাট্রিক্সের ধর্ম: Identity Matrix", "IA = AI = A", "Multiplying by the identity matrix does not change a matrix.", [["I", "identity matrix"]]],
    ["ম্যাট্রিক্সের গুণ: Distributive Property", "A(B + C) = AB + AC\n(B + C)A = BA + CA", "Matrix multiplication distributes over matrix addition.", [["A, B, C", "compatible matrices"]]],
    ["ম্যাট্রিক্সের গুণ: Non-Commutative Property", "AB != BA", "In general, matrix multiplication is not commutative.", [["AB, BA", "products that may both exist but are usually different"]]],
    ["ম্যাট্রিক্সের গুণ: Associative Property", "A(BC) = (AB)C", "Matrix multiplication is associative when the products are defined.", [["A, B, C", "compatible matrices"]]],
    ["ম্যাট্রিক্সের গুণ: Order of AB", "order(AB) = m x p", "If AB is defined, m is the number of rows of A and p is the number of columns of B.", [["m", "number of rows of A"], ["p", "number of columns of B"]]],
    ["ম্যাট্রিক্সের গুণ: Order of (AB)C", "order((AB)C) = m x q", "If (AB)C is defined, m is the number of rows of A and q is the number of columns of C.", [["m", "number of rows of A"], ["q", "number of columns of C"]]],
    ["ম্যাট্রিক্স গুণের উদাহরণ", "A = [a11 a12 a13; a21 a22 a23]\nB = [b11 b12; b21 b22; b31 b32]\n\nAB = [\na11b11 + a12b21 + a13b31    a11b12 + a12b22 + a13b32;\na21b11 + a22b21 + a23b31    a21b12 + a22b22 + a23b32\n]", "Example from the PDF showing multiplication of a 2 x 3 matrix by a 3 x 2 matrix.", [["AB", "result is a 2 x 2 matrix"]]],
    ["নির্ণায়ক: 2 by 2 Determinant", "A = [a b; c d]\n|A| = |a b; c d| = ad - bc", "The determinant is defined only for square matrices such as 2 x 2, 3 x 3, or n x n matrices.", [["a, b, c, d", "elements of the matrix"]]],
    ["নির্ণায়ক: Numeric Example", "A = [2 3; 4 5]\n|A| = (2)(5) - (3)(4)\n|A| = 10 - 12 = -2", "Worked determinant example from the PDF.", [["|A|", "determinant of A"]]],
    ["সহগুণক দিয়ে নির্ণায়ক", "A = [a_ij] where 1 <= i,j <= n\n|A| = sum(j=1 to n) a_ij A_ij\n|A| = sum(i=1 to n) a_ij A_ij", "A determinant can be expanded by a row or a column using cofactors.", [["A_ij", "cofactor of a_ij"]]],
    ["গুণফলের নির্ণায়ক", "|AB| = |A||B|", "The determinant of a product equals the product of determinants.", [["A, B", "square matrices of the same order"]]],
    ["স্কেলার গুণ করলে নির্ণায়ক", "|pA| = p^n |A|", "If A is an n x n matrix, multiplying A by scalar p multiplies the determinant by p^n.", [["p", "scalar"], ["n", "order of square matrix A"]]],
    ["স্কেলার নির্ণায়ক উদাহরণ", "If A is 3 x 3, then n = 3\n|pA| = p^3 |A|\nIf p = 2, then |2A| = 2^3 |A| = 8|A|", "Example from the PDF for scalar multiplication of a determinant.", [["p", "scalar value"]]],
    ["বিপরীত ম্যাট্রিক্সের নির্ণায়ক", "|A^-1| = 1 / |A|", "The determinant of the inverse is the reciprocal of the determinant.", [["|A|", "non-zero determinant"]]],
    ["স্কেলারসহ বিপরীত ম্যাট্রিক্স", "|(pA)^-1| = 1 / (p^n |A|)\n|pA^-1| = p^n / |A|\n|(pA^-1)^-1| = |A| / p^n", "Useful determinant identities involving scalar multiples and inverse matrices.", [["p", "non-zero scalar"], ["A", "invertible n x n matrix"]]],
    ["বিপরীত ম্যাট্রিক্স", "A^-1 = adj(A) / |A|, |A| != 0", "A matrix has an inverse only when its determinant is non-zero.", [["adj(A)", "adjoint of A"]]],
    ["বিপরীত ম্যাট্রিক্সের ধর্ম", "AA^-1 = A^-1A = I", "A matrix multiplied by its inverse gives the identity matrix.", [["I", "identity matrix"]]],
    ["গুণফলের বিপরীত", "(AB)^-1 = B^-1 A^-1", "The inverse of a product reverses the multiplication order. A and B must be square and invertible.", [["A, B", "invertible square matrices"]]],
    ["ম্যাট্রিক্স সমীকরণ", "AX = B => X = A^-1B", "Used to solve a matrix equation when A is invertible.", [["X", "unknown matrix"]]],
    ["২ বাই ২ ম্যাট্রিক্সের বিপরীত", "A = [a b; c d]\n|A| = ad - bc\nA^-1 = 1/(ad - bc) [d -b; -c a]", "Formula for the inverse of a non-singular 2 x 2 matrix.", [["ad - bc", "must not be zero"]]],
    ["ব্যতিক্রমী ও অব্যতিক্রমী শর্ত", "ad = bc => A is singular\nad != bc => A is non-singular", "A 2 x 2 matrix is invertible exactly when ad - bc is not zero.", [["singular", "inverse does not exist"], ["non-singular", "inverse exists"]]],
    ["কর্ণ ম্যাট্রিক্স: Square", "A = diag(a, b, c)\nA^2 = diag(a^2, b^2, c^2)", "Squaring a diagonal matrix squares each diagonal entry.", [["diag(a,b,c)", "diagonal matrix with entries a, b, c"]]],
    ["কর্ণ ম্যাট্রিক্স: Inverse", "A^-1 = diag(1/a, 1/b, 1/c)", "The inverse of a diagonal matrix is found by taking reciprocals of diagonal entries.", [["a, b, c", "non-zero diagonal entries"]]],
    ["ম্যাট্রিক্সের সমতা", "A = B iff a_ij = b_ij", "Two matrices are equal when all corresponding elements are equal.", [["a_ij, b_ij", "corresponding elements"]]],
    ["স্কেলার গুণ", "KA = [K a_ij]", "Multiplying a matrix by a scalar multiplies every entry by that scalar.", [["K", "scalar"]]],
    ["ম্যাট্রিক্সের ঘাত", "A^2 = A.A\nA^3 = A^2.A\nA^(n+1) = A^n.A\nA^0 = I\nI^n = I", "Rules for powers of a square matrix.", [["A", "square matrix"], ["I", "identity matrix"]]],
    ["ম্যাট্রিক্সের বহুপদী", "If f(x) = a0 + a1x + a2x^2 + ... + anx^n,\nf(A) = a0I + a1A + a2A^2 + ... + anA^n", "A polynomial can be evaluated at a square matrix.", [["f(A)", "matrix polynomial"]]],
    ["প্রতিসম ম্যাট্রিক্স", "A = A^T\na_ij = a_ji", "A matrix is symmetric when it equals its transpose.", [["A^T", "transpose of A"]]],
    ["বিপ্রতিসম ম্যাট্রিক্স", "A = -A^T\na_ij = -a_ji", "A matrix is skew-symmetric when its transpose is the negative of itself.", [["A^T", "transpose of A"]]],
    ["সমঘাতী ম্যাট্রিক্স", "A^2 = A", "A matrix is idempotent when squaring it gives the same matrix.", [["A", "square matrix"]]],
    ["অভেদঘাতী ম্যাট্রিক্স", "A^2 = I", "A matrix is involutory when its square is the identity matrix.", [["I", "identity matrix"]]],
    ["শূন্যঘাতী ম্যাট্রিক্স", "A^n = O", "A matrix is nilpotent if some positive power of it becomes the zero matrix.", [["O", "zero matrix"]]]
  ],
  straightLine: [
    ["Intercept Form", "x/a + y/b = 1", "Equation of a straight line with x-intercept a and y-intercept b.", [["a", "x-intercept"], ["b", "y-intercept"]]],
    ["Two-Point Form", "(y - y1) / (y1 - y2) = (x - x1) / (x1 - x2)", "Equation of a line passing through two points.", [["(x1, y1), (x2, y2)", "given points"]]],
    ["Normal Form", "x cos alpha + y sin alpha = p", "Equation of a line when its perpendicular distance from the origin is p.", [["alpha", "angle made by the perpendicular"], ["p", "distance from origin"]]],
    ["Angle Between Lines", "theta = tan^-1((m1 - m2) / (1 + m1m2))", "Finds the angle between two lines with slopes m1 and m2.", [["m1, m2", "slopes of the two lines"]]],
    ["Point-Line Distance", "d = |ax1 + by1 + c| / sqrt(a^2 + b^2)", "Distance from point (x1, y1) to line ax + by + c = 0.", [["d", "perpendicular distance"]]]
  ],
  circle: [
    ["Circle at Origin", "x^2 + y^2 = r^2", "Standard equation of a circle with center at the origin.", [["r", "radius"]]],
    ["Circle With Center (h, k)", "(x - h)^2 + (y - k)^2 = r^2", "Equation of a circle with center (h, k).", [["(h, k)", "center"], ["r", "radius"]]],
    ["General Circle", "x^2 + y^2 + 2gx + 2fy + c = 0", "General equation of a circle from the PDF.", [["center", "(-g, -f)"], ["radius", "sqrt(g^2 + f^2 - c)"]]],
    ["Tangent to x^2 + y^2 = a^2", "y = mx +/- a sqrt(1 + m^2)", "Equation of tangents with slope m to the circle centered at origin.", [["m", "slope of tangent"], ["a", "radius"]]],
    ["Common Chord", "S1 - S2 = 0", "The common chord of two circles S1 = 0 and S2 = 0.", [["S1, S2", "equations of two circles"]]]
  ],
  coordinate: [
    ["Cartesian and Polar", "x = r cos theta, y = r sin theta", "Converts polar coordinates to Cartesian coordinates.", [["r", "radius vector"], ["theta", "angle"]]],
    ["Polar Radius", "r = sqrt(x^2 + y^2)", "Finds distance from origin to the point (x, y).", [["r", "distance from origin"]]],
    ["Distance Between Points", "PQ = sqrt((x1 - x2)^2 + (y1 - y2)^2)", "Distance formula for two Cartesian points.", [["P, Q", "two points"]]],
    ["Section Formula", "R = ((m1x2 + m2x1)/(m1 + m2), (m1y2 + m2y1)/(m1 + m2))", "Coordinates of a point dividing a segment internally.", [["m1:m2", "division ratio"]]],
    ["Triangle Area", "Delta = 1/2[x1(y2-y3) + x2(y3-y1) + x3(y1-y2)]", "Area of triangle formed by three coordinate points.", [["Delta", "triangle area"]]]
  ],
  trigonometry: [
    ["Angle Sum for Sine", "sin(A +/- B) = sinA cosB +/- cosA sinB", "Addition and subtraction formula for sine.", [["A, B", "angles"]]],
    ["Angle Sum for Cosine", "cos(A +/- B) = cosA cosB ∓ sinA sinB", "Addition and subtraction formula for cosine.", [["A, B", "angles"]]],
    ["Angle Sum for Tangent", "tan(A +/- B) = (tanA +/- tanB) / (1 ∓ tanA tanB)", "Addition and subtraction formula for tangent.", [["A, B", "angles"]]],
    ["Double-Angle Sine", "sin 2A = 2 sinA cosA", "Double-angle identity for sine.", [["A", "angle"]]],
    ["Double-Angle Cosine", "cos 2A = cos^2A - sin^2A = 2cos^2A - 1 = 1 - 2sin^2A", "Equivalent forms of the double-angle cosine identity.", [["A", "angle"]]],
    ["Triple-Angle Sine", "sin 3A = 3sinA - 4sin^3A", "Triple-angle identity for sine.", [["A", "angle"]]]
  ],
  limits: [
    ["Basic Sine Limit", "lim(x->0) sin x / x = 1", "A core trigonometric limit from the PDF.", [["x", "angle in radians"]]],
    ["Basic Tangent Limit", "lim(x->0) tan x / x = 1", "Useful when evaluating trigonometric limits.", [["x", "angle in radians"]]],
    ["Power Difference Limit", "lim(x->a) (x^n - a^n)/(x - a) = n a^(n-1)", "A standard algebraic limit.", [["n", "positive integer"]]],
    ["Exponential Limit", "lim(x->infinity) (1 + m/x)^x = e^m", "Important exponential limit.", [["m", "constant"]]],
    ["Derivative Definition", "lim(h->0) [f(x+h) - f(x)] / h = d/dx{f(x)}", "Definition of derivative using a limit.", [["h", "small change in x"]]]
  ],
  differentiation: [
    ["Power Rule", "d/dx(x^n) = n x^(n-1)", "Basic rule for differentiating powers of x.", [["n", "constant exponent"]]],
    ["Trigonometric Derivatives", "d/dx(sin x)=cos x, d/dx(cos x)=-sin x", "Core sine and cosine derivatives.", [["x", "variable"]]],
    ["Tangent Derivative", "d/dx(tan x) = sec^2 x", "Derivative of tangent.", [["sec x", "1/cos x"]]],
    ["Product Rule", "d/dx(uv) = u(dv/dx) + v(du/dx)", "Differentiates the product of two functions.", [["u, v", "functions of x"]]],
    ["Quotient Rule", "d/dx(u/v) = [v(du/dx) - u(dv/dx)] / v^2", "Differentiates a quotient of two functions.", [["v", "denominator function, v != 0"]]],
    ["Tangent Line", "y - y1 = f'(x1)(x - x1)", "Equation of tangent to y = f(x) at (x1, y1).", [["f'(x1)", "slope at the point"]]]
  ],
  integration: [
    ["Power Integral", "∫x^n dx = x^(n+1)/(n+1) + C, n != -1", "Basic integration formula for powers.", [["C", "constant of integration"]]],
    ["Sine Integral", "∫sin x dx = -cos x + C", "Standard trigonometric integral.", [["C", "constant of integration"]]],
    ["Cosine Integral", "∫cos x dx = sin x + C", "Standard trigonometric integral.", [["C", "constant of integration"]]],
    ["Secant Square Integral", "∫sec^2 x dx = tan x + C", "Useful for tangent-related integration.", [["sec x", "1/cos x"]]],
    ["Log Integral", "∫(1/x) dx = ln|x| + C", "Basic logarithmic integral.", [["x", "non-zero variable"]]],
    ["Integration by Parts", "∫u v dx = u∫v dx - ∫[(du/dx)∫v dx] dx", "Formula from the PDF for integration by parts.", [["u, v", "functions of x"]]]
  ]
};

function formulasFor(chapter) {
  const title = chapter.title;
  const lower = title.toLowerCase();
  if (lower.includes("matrix")) {
    return PDF_MATH_FORMULAS.matrix;
  }
  if (lower.includes("vector")) {
    return [
      ["Magnitude of Vector", "|a| = sqrt(x^2 + y^2 + z^2)", "Finds the length of a vector in three dimensions.", [["x, y, z", "components of the vector"]]],
      ["Dot Product", "a . b = |a||b| cos theta", "Connects vector multiplication with the angle between two vectors.", [["theta", "angle between vectors"]]],
      ["Cross Product Magnitude", "|a x b| = |a||b| sin theta", "Gives the area of the parallelogram formed by two vectors.", [["theta", "angle between vectors"]]]
    ];
  }
  if (lower.includes("straight line") || lower.includes("geometry")) {
    return lower.includes("straight line") ? PDF_MATH_FORMULAS.straightLine : PDF_MATH_FORMULAS.coordinate;
  }
  if (lower.includes("circle")) {
    return PDF_MATH_FORMULAS.circle;
  }
  if (lower.includes("trigonometry") || lower.includes("inverse trigonometric")) {
    return PDF_MATH_FORMULAS.trigonometry;
  }
  if (lower.includes("function and graph")) {
    return PDF_MATH_FORMULAS.limits;
  }
  if (lower.includes("differential calculus")) {
    return PDF_MATH_FORMULAS.differentiation;
  }
  if (lower.includes("integral calculus")) {
    return PDF_MATH_FORMULAS.integration;
  }
  if (lower.includes("conic section")) {
    return PDF_MATH_FORMULAS.circle;
  }
  if (lower.includes("complex")) {
    return [
      ["Complex Number Form", "z = a + bi", "Standard form of a complex number.", [["a", "real part"], ["b", "imaginary coefficient"]]],
      ["Modulus", "|z| = sqrt(a^2 + b^2)", "Finds the distance of z from the origin.", [["|z|", "modulus"]]],
      ["Argument", "tan theta = b / a", "Finds the direction angle of a complex number.", [["theta", "argument"]]]
    ];
  }
  if (lower.includes("motion")) {
    return [
      ["Final Velocity", "v = u + at", "Used for uniformly accelerated motion.", [["u", "initial velocity"], ["a", "acceleration"], ["t", "time"]]],
      ["Displacement", "s = ut + 1/2 at^2", "Finds displacement when acceleration is constant.", [["s", "displacement"]]],
      ["Velocity-Displacement", "v^2 = u^2 + 2as", "Relates velocity and displacement without time.", [["v", "final velocity"]]]
    ];
  }
  if (lower.includes("current electricity")) {
    return [
      ["Ohm's Law", "V = IR", "Relates voltage, current, and resistance.", [["V", "potential difference"], ["I", "current"], ["R", "resistance"]]],
      ["Electrical Power", "P = VI", "Calculates electric power in a circuit.", [["P", "power"]]],
      ["Resistance of Wire", "R = rho L / A", "Finds resistance from material and size.", [["rho", "resistivity"], ["L", "length"], ["A", "area"]]]
    ];
  }
  if (chapter.subject.type === "physics") {
    return [
      ["Core Relation", "quantity = numerical value x unit", "Use this editable card for the main relation from this chapter.", [["quantity", "measured physical amount"]]],
      ["Rate Formula", "rate = change in quantity / time", "Useful for motion, energy, electric, and wave topics.", [["time", "duration of change"]]],
      ["Proportional Form", "effect is proportional to cause / resistance", "A compact way to remember many physics relationships.", [["effect", "observed result"], ["cause", "driving factor"]]]
    ];
  }
  return [
    ["Basic Identity", "result = given value + required change", "Use this editable card for a main formula from the chapter.", [["result", "final expression"]]],
    ["Ratio Formula", "ratio = first quantity / second quantity", "Helpful for comparing related mathematical quantities.", [["ratio", "comparison value"]]],
    ["General Equation", "unknown = known terms arranged logically", "A placeholder formula card that can be replaced later.", [["unknown", "value to find"]]]
  ];
}

function renderPdfPanel(slug, prefix) {
  const pdf = CHAPTER_PDFS[slug];
  if (!pdf) return "";
  const href = `${prefix}${pdf.file}`;
  return `
    <section class="pdf-panel" aria-label="Chapter PDF">
      <div>
        <h2>${pdf.title}</h2>
        <p>Open or download the original chapter formula PDF.</p>
      </div>
      <div class="pdf-actions">
        <a class="btn btn-primary" href="${href}" target="_blank" rel="noopener">${ICONS.external}Open PDF</a>
        <a class="btn btn-secondary" href="${href}" download>${ICONS.download}Download PDF</a>
      </div>
    </section>
  `;
}

function renderFormulaPage() {
  const root = document.querySelector("#formula-root");
  if (!root) return;
  const slug = document.body.dataset.formula;
  const chapter = findChapterBySlug(slug);
  if (!chapter) {
    root.innerHTML = "<p>Formula sheet not found.</p>";
    return;
  }
  document.title = `${chapter.title} Formula Sheet | Nabib's Classroom`;
  const prefix = pagePrefix();
  const chapterPdf = CHAPTER_PDFS[slug];
  const pdfHref = chapterPdf ? `${prefix}${chapterPdf.file}` : "";
  const formulas = formulasFor(chapter);
  const formulaCards = chapterPdf?.pdfOnly ? "" : `
    <div class="formula-layout">
      ${formulas.map((formula) => `
        <article class="formula-card">
          <h2>${formula[0]}</h2>
          <code class="formula-text">${formula[1]}</code>
          <p>${formula[2]}</p>
          <dl>${formula[3].map(([term, meaning]) => `<dt>${term}</dt><dd>${meaning}</dd>`).join("")}</dl>
          <button class="btn btn-secondary copy-formula" type="button" data-formula="${formula[1]}">Copy Formula</button>
        </article>
      `).join("")}
    </div>
    <div class="formula-actions">
      <button class="btn btn-primary" type="button" onclick="window.print()">Print Page</button>
      <a class="btn btn-secondary" href="${prefix}${chapter.subject.page}">Back to Chapters</a>
    </div>
  `;
  const pdfViewer = chapterPdf?.pdfOnly ? `
    <iframe class="pdf-viewer" src="${pdfHref}" title="${chapterPdf.title}"></iframe>
    <div class="formula-actions">
      <a class="btn btn-secondary" href="${prefix}${chapter.subject.page}">${ICONS.arrowLeft}Back to Chapters</a>
    </div>
  ` : "";
  root.innerHTML = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${prefix}index.html">Home</a><span>&gt;</span>
      <a href="${prefix}formulas.html">Formula Sheets</a><span>&gt;</span>
      <a href="${prefix}${chapter.subject.page}">${chapter.subject.title}</a><span>&gt;</span>
      <span>${chapter.title}</span>
    </nav>
    <div class="page-title">
      <p class="eyebrow">${chapter.subject.title}</p>
      <h1>${chapter.title}</h1>
      <p>${chapterDescription(chapter.subject, chapter.title)}</p>
    </div>
    ${renderPdfPanel(slug, prefix)}
    ${pdfViewer}
    ${formulaCards}
  `;
}

function setupMenu() {
  const button = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!button || !links) return;
  button.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function setupBackToTop() {
  const button = document.querySelector(".back-to-top");
  if (!button) return;
  window.addEventListener("scroll", () => button.classList.toggle("show", window.scrollY > 500));
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupCopyButtons() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest(".copy-formula");
    if (!button) return;
    await navigator.clipboard.writeText(button.dataset.formula);
    const oldText = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = oldText; }, 1400);
  });
}

function iconForButton(text) {
  const normalized = text.trim().toLowerCase();
  if (normalized.includes("formula")) return "calculator";
  if (normalized.includes("quiz")) return "clipboard";
  if (normalized.includes("game")) return "gamepad";
  if (normalized.includes("simulation")) return "external";
  if (normalized.includes("course") || normalized.includes("contact")) return "graduation";
  if (normalized.includes("chapter")) return "list";
  if (normalized.includes("play") || normalized.includes("open")) return "external";
  if (normalized.includes("start")) return "play";
  if (normalized.includes("copy")) return "copy";
  if (normalized.includes("print")) return "print";
  if (normalized.includes("back")) return "arrowLeft";
  if (normalized.includes("top")) return "arrowUp";
  return "book";
}

function chapterIconForTitle(subjectKey, title) {
  const text = `${subjectKey} ${title}`.toLowerCase();
  if (text.includes("matrix")) return "matrix";
  if (text.includes("vector")) return "motion";
  if (text.includes("straight") || text.includes("geometry")) return "functionGraph";
  if (text.includes("circle") || text.includes("conic")) return "geometry";
  if (text.includes("trigon")) return "functionGraph";
  if (text.includes("calculus") || text.includes("polynomial") || text.includes("binomial") || text.includes("complex") || text.includes("real number")) return "sigma";
  if (text.includes("permutation") || text.includes("combination") || text.includes("function")) return "calculator";
  if (text.includes("motion") || text.includes("mechanics") || text.includes("dynamics") || text.includes("statics") || text.includes("work") || text.includes("gravitation")) return "motion";
  if (text.includes("wave") || text.includes("periodic")) return "wave";
  if (text.includes("electric") || text.includes("magnetic") || text.includes("induction") || text.includes("semiconductor") || text.includes("electronics")) return "circuit";
  if (text.includes("optics")) return "lens";
  if (text.includes("atom") || text.includes("nuclear") || text.includes("modern") || text.includes("physical world") || text.includes("matter") || text.includes("gas") || text.includes("thermodynamics") || text.includes("electrostatics")) return "atom";
  return subjectKey.includes("physics") ? "atom" : "sigma";
}

function iconForCard(card) {
  const text = card.textContent.toLowerCase();
  if (text.includes("higher math 1st") || text.includes("higher math 2nd") || text.includes("physics 1st") || text.includes("physics 2nd")) return "";
  if (text.includes("quiz") || text.includes("exam")) return "clipboard";
  if (text.includes("game")) return "gamepad";
  if (text.includes("simulation") || text.includes("phet")) return "external";
  if (text.includes("course") || text.includes("physics")) return "graduation";
  if (text.includes("formula") || text.includes("math")) return "calculator";
  return "book";
}

function setupIcons() {
  const logo = document.querySelector(".logo");
  if (logo && !logo.querySelector(".icon")) {
    logo.insertAdjacentHTML("afterbegin", ICONS.book);
  }

  const menu = document.querySelector(".menu-toggle");
  if (menu && !menu.querySelector(".icon")) {
    menu.insertAdjacentHTML("afterbegin", ICONS.menu);
  }

  document.querySelectorAll(".btn, .back-to-top").forEach((button) => {
    if (button.classList.contains("btn-disabled")) return;
    if (button.querySelector(".icon")) return;
    const iconName = iconForButton(button.textContent);
    button.insertAdjacentHTML("afterbegin", ICONS[iconName]);
  });

  document.querySelectorAll(".card").forEach((card) => {
    if (card.closest("#simulations")) return;
    if (card.querySelector(".card-icon") || card.querySelector(".chapter-number")) return;
    const iconName = iconForCard(card);
    if (!iconName) return;
    card.insertAdjacentHTML("afterbegin", `<span class="card-icon">${ICONS[iconName]}</span>`);
  });
}

setupMenu();
setupBackToTop();
setupCopyButtons();
renderChapterList();
renderAvailableQuizzes();
renderQuizSections();
renderFormulaPage();
setupIcons();
