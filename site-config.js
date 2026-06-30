/**
 * ─────────────────────────────────────────────────────────────
 *  Mohammed Jaber — CLOUD ARCHITECT SITE CONFIG
 *  Single source of truth for all content cards & navigation.
 *  Edit via admin.html — changes persist in localStorage.
 * ─────────────────────────────────────────────────────────────
 */

window.SITE_CONFIG = {

  owner: {
    name:     "Mohammed Jaber",
    title:    "AWS Cloud Architect & Strategic Consultant",
    role:     "Senior IT Infrastructure Specialist · Cloud Advisory · Riyadh, Saudi Arabia",
    location: "Riyadh, KSA",
    linkedin: "https://linkedin.com",
    email:    "your@email.com",
    stats: [
      { num: "20+",  label: "Years Experience" },
      { num: "6",    label: "Tools Published"  },
      { num: "18mo", label: "AWS Mastery Plan"  },
      { num: "∞",    label: "Ambition"          }
    ],
    chips: [
      { label: "🏅 AWS Certified",       color: "gold"   },
      { label: "20+ Years Experience",   color: "green"  },
      { label: "Vision 2030 Aligned",    color: "blue"   },
      { label: "Strategic Consulting",   color: "purple" },
      { label: "📍 Riyadh, KSA",         color: "default"}
    ],
    clients: [
      { name: "Princess Nourah bint Abdulrahman University", sub: "Data Center Migration · Cloud Advisory" },
      { name: "Imam Mohammad Ibn Saud Islamic University",   sub: "Cloud Adoption Plan · Governance 2026–2027" },
      { name: "Edarat Cloud",                                sub: "Oracle RAC DR Advisory" }
    ]
  },

  /**
   * CARDS — each card appears on the home page.
   * Fields:
   *   id       : unique slug (used as URL key)
   *   title    : card title
   *   desc     : short description
   *   icon     : emoji
   *   color    : purple | gold | green | blue | red | orange | teal
   *   status   : live | soon
   *   url      : filename (for live) or "#" (for soon)
   *   type     : label shown above title
   *   tags     : array of tag strings
   *   isNew    : true/false — shows NEW badge
   *   topic    : category for grouping (Tools | Learning | Compliance | Coming Soon)
   *   order    : display order (lower = first)
   */
  cards: [
    {
      id:     "aws-roadmap",
      title:  "AWS Solutions Architect — 18-Month Mastery Roadmap",
      desc:   "A complete, structured 5-phase learning pathway from Cloud Foundations to Strategic Consulting. Includes certification targets, domain mapping, and resource recommendations.",
      icon:   "🏛️",
      color:  "gold",
      status: "live",
      url:    "aws-roadmap.html",
      type:   "Interactive Roadmap",
      tags:   ["SAA-C03", "SAP-C02", "5 Phases", "18 Months"],
      isNew:  false,
      topic:  "Learning",
      order:  1
    },
    {
      id:     "cloud-advisory",
      title:  "Cloud Advisory — Strategic Consulting Mastery",
      desc:   "An 8-module step-by-step curriculum covering Well-Architected Reviews, Cloud Governance, Executive Communication, TCO Analysis, CCoE Leadership, Risk & Compliance, and APN practice building.",
      icon:   "🎓",
      color:  "purple",
      status: "live",
      url:    "cloud-advisory.html",
      type:   "Interactive Curriculum",
      tags:   ["WAF Reviews", "FinOps", "Executive Briefing", "APN"],
      isNew:  false,
      topic:  "Learning",
      order:  2
    },
    {
      id:     "cloud-best-practices",
      title:  "Cloud Best Practices — Complete Professional Guide",
      desc:   "Comprehensive, consultant-grade reference covering all four domains: Architecture & Design, Security & Compliance, Cost Optimization & FinOps, and Cloud Governance & Operations.",
      icon:   "📋",
      color:  "blue",
      status: "live",
      url:    "cloud-best-practices.html",
      type:   "Professional Reference",
      tags:   ["Architecture", "Security", "FinOps", "Governance"],
      isNew:  false,
      topic:  "Learning",
      order:  3
    },
    {
      id:     "nca-pdpl-compliance",
      title:  "NCA & PDPL Cloud Compliance Checklist",
      desc:   "Interactive compliance checklist mapping AWS controls to Saudi Arabia's NCA Cybersecurity Controls (CCC), PDPL, NDMO Cloud Policy, and Cloud Operations standards — with live compliance scoring.",
      icon:   "🇸🇦",
      color:  "red",
      status: "live",
      url:    "nca-pdpl-compliance.html",
      type:   "Compliance Checklist",
      tags:   ["NCA CCC", "PDPL", "NDMO", "40+ Controls"],
      isNew:  true,
      topic:  "Compliance",
      order:  4
    },
    {
      id:     "tco-calculator",
      title:  "Cloud TCO Calculator — AWS vs On-Premises",
      desc:   "Interactive Total Cost of Ownership calculator comparing on-premises vs AWS Cloud. Generates executive-ready ROI analysis, payback period, sensitivity analysis, and client briefing in SAR.",
      icon:   "💰",
      color:  "green",
      status: "live",
      url:    "tco-calculator.html",
      type:   "Financial Advisory Tool",
      tags:   ["TCO Analysis", "ROI", "Executive Report", "SAR"],
      isNew:  true,
      topic:  "Tools",
      order:  5
    },
    {
      id:     "war-template",
      title:  "Well-Architected Review Template",
      desc:   "A structured WAR executive deliverable template — ready to customize and present to clients. Covers all 6 pillars with risk heat map, findings, and improvement roadmap.",
      icon:   "🏗️",
      color:  "orange",
      status: "soon",
      url:    "#",
      type:   "Consulting Deliverable",
      tags:   ["WAF", "6 Pillars", "Client Report"],
      isNew:  false,
      topic:  "Tools",
      order:  6
    },
    {
      id:     "governance-builder",
      title:  "Cloud Governance Framework Builder",
      desc:   "Interactive tool for designing and documenting a cloud governance framework — covering FinOps, security, tagging strategy, and multi-account design. Outputs a client-ready governance document.",
      icon:   "🌱",
      color:  "purple",
      status: "soon",
      url:    "#",
      type:   "Governance Tool",
      tags:   ["Governance", "Control Tower", "Landing Zone"],
      isNew:  false,
      topic:  "Tools",
      order:  7
    },
    {
      id:     "maturity-assessment",
      title:  "Cloud Maturity Assessment Tool",
      desc:   "Interactive maturity assessment across 5 cloud dimensions — evaluating your organization's cloud readiness and generating a prioritized improvement roadmap aligned with AWS best practices.",
      icon:   "📊",
      color:  "blue",
      status: "soon",
      url:    "#",
      type:   "Assessment Tool",
      tags:   ["Maturity Model", "Assessment", "Roadmap"],
      isNew:  false,
      topic:  "Tools",
      order:  8
    }
  ],

  roadmap: [
    { phase:"Phase 1 · Months 1–2",  title:"Cloud Foundations",            cert:"Target: AWS Cloud Practitioner (CLF-C02)",              dot:"🌱", color:"#f59e0b,#d97706" },
    { phase:"Phase 2 · Months 3–5",  title:"Associate Architecture",       cert:"Target: AWS Solutions Architect Associate (SAA-C03)",   dot:"🔧", color:"#3b82f6,#2563eb" },
    { phase:"Phase 3 · Months 6–10", title:"Professional Architecture",    cert:"Target: AWS Solutions Architect Professional (SAP-C02)",dot:"🏗️", color:"#8b5cf6,#7c3aed" },
    { phase:"Phase 4 · Months 11–14",title:"Specialization — Security + AI/ML", cert:"Target: AWS Security Specialty · AWS ML Specialty", dot:"⚡", color:"#10b981,#059669" },
    { phase:"Phase 5 · Months 15–18",title:"Strategic Consulting Mastery", cert:"Target: APN Consulting Partner · AWS Ambassador Track",  dot:"🏆", color:"#ef4444,#dc2626" }
  ]
};

/**
 * Merge localStorage overrides (from admin panel) into config.
 */
(function mergeAdminOverrides() {
  try {
    const stored = localStorage.getItem('md_site_cards');
    if (stored) {
      window.SITE_CONFIG.cards = JSON.parse(stored);
    }
    const storedOwner = localStorage.getItem('md_site_owner');
    if (storedOwner) {
      Object.assign(window.SITE_CONFIG.owner, JSON.parse(storedOwner));
    }
  } catch(e) { /* silently ignore */ }
})();
