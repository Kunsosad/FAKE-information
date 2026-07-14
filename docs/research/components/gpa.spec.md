# GPA Page Specification

## Overview
- Target: `GPA.html`, `app.js`, `styles.css`.
- Reference: user screenshots of the authenticated GPA page.
- Interaction model: static table; Personal dropdown switches pages.

## Exact Visual Rules
- Arial, 16px body; no cards, helper copy, badges, legends, filters, or decorative sections.
- White page, `#4d90fe` navigation, `#e7e7e7` section headers, `#eaf2f8` table headers.
- Thin blue-grey table borders and compact rows.
- Page title: `Kết quả học tập và rèn luyện đạo đức`.

## GPA Content
- Summary table preserves the exact values shown for the first three semesters.
- Detailed table preserves rows 1-28 and every visible score exactly.
- Rows 29-38 use current-semester data; visible scores remain unchanged.
- Any missing current score is generated once and GPA is calculated from the rows.

## Responsive Behavior
- Source layout remains desktop-width; narrow screens scroll horizontally.

