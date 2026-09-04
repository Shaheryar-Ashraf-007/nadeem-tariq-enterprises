import { PawPrint, Shirt, Droplets, Smartphone } from "lucide-react";

export const divisions = [
  {
    code: "DIV.01",
    key: "pet-supplies",
    slug: "/divisions/pet-supplies",
    headerImage: "/pertssupplies.png",
    name: "Pet Supplies",
    short: "Pet Supplies",
    icon: PawPrint,
    color: "pet",
    established: "2011",
    tagline:
      "Everyday goods for animals who don\u2019t know they\u2019re customers.",
    summary:
      "Our Pet Supplies division offers a comprehensive range of premium products designed to enhance the health, comfort, and happiness of pets. From nutritious food and feeding accessories to grooming essentials, toys, bedding, leashes, and healthcare products, we carefully source and deliver reliable solutions that meet the needs of pet owners, retailers, and distributors. With a strong commitment to quality, durability, and customer satisfaction, we ensure every product provides exceptional value while supporting the well-being of pets every day.",
    stats: [
      { label: "SKUs shipped", value: "1,200+" },
      { label: "Retail partners", value: "340" },
      { label: "Markets served", value: "14" },
    ],
    lines: [
      {
        title: "Feeding & Bowls",
        image: "/bowls.png",
        desc: "Stainless, ceramic and non-slip silicone feeding sets in standard and bulk-pack formats.",
      },
      {
        title: "Grooming Tools",
        image: "/tools.png",

        desc: "Brushes, nail trimmers and de-shedding tools tested for coat types from short-hair to double-coat.",
      },
      {
        title: "Comfort & Bedding",
        image: "/beds.png",

        desc: "Washable bedding, crate liners and travel mats built to survive a washing machine, repeatedly.",
      },
      {
        title: "Leashes & Restraints",
        image: "/leashes.png",

        desc: "Webbing and rope leashes rated by pull strength, with hardware tested to a fixed cycle count.",
      },
    ],
    process: [
      "Raw material intake & fabric/resin testing",
      "Small-batch sampling with partner retailers",
      "Cycle and durability testing in-house",
      "Bulk production and pack-format finishing",
      "Palletised dispatch with retailer-ready labelling",
    ],
  },
  {
    code: "DIV.02",
    key: "kids-garment",
    slug: "/divisions/kids-garment",
    headerImage: "/garments.png",
    name: "Kids Garment",
    short: "Kids Garment",
    icon: Shirt,
    color: "kids",
    established: "2005",
    tagline: "Clothing built for the way children actually move.",
    summary:
      "Our Kids Garment division offers a thoughtfully curated collection of high-quality clothing for infants, toddlers, and children. From everyday essentials to stylish occasion wear, each garment is crafted using soft, breathable fabrics that ensure comfort, durability, and freedom of movement. Designed with modern trends and practical functionality in mind, our apparel undergoes strict quality checks to deliver reliable products that meet the expectations of retailers, distributors, and families alike.",
    stats: [
      { label: "Garments per year", value: "2.1M" },
      { label: "Fabric mills audited", value: "22" },
      { label: "Size ranges", value: "0\u201312 yrs" },
    ],
    lines: [
      {
        title: "Everyday Basics",
        image: "/everyday.png",

        desc: "Cotton tees, joggers and rompers in fade-resistant dye lots, priced for repeat ordering.",
      },
      {
        title: "School & Uniform",
        image: "/uniform.png",
        desc: "Durable weaves in standard uniform colourways with reinforced knees and cuffs.",
      },
      {
        title: "Sleepwear",
        image: "/sleepwear.png",

        desc: "Flame-retardant-compliant fabrics, tag-free necklines, sized to national safety standards.",
      },
      {
        title: "Occasion Wear",
        image: "/occasion.png",

        desc: "Short-run festive and formal pieces produced against confirmed retailer orders only.",
      },
    ],
    process: [
      "Seasonal design & fabric selection",
      "Grading across the full size curve",
      "Safety and colourfastness testing",
      "Cut, sew, and quality-pass inspection",
      "Folded, tagged and carton-ready packing",
    ],
  },
  {
    code: "DIV.03",
    key: "offset-printing-ink",
    headerImage: "/ink_head.png",

    slug: "/divisions/offset-printing-ink",

    name: "Offset Printing Ink",
    short: "Printing Ink",
    icon: Droplets,
    color: "ink-div",
    established: "1998",
    tagline: "Ink that behaves the same on press two, in two years.",
    summary:
      "Our Offset Printing Ink division specializes in manufacturing and supplying high-performance printing inks engineered for exceptional consistency, color accuracy, and reliable press performance. We offer a comprehensive range of sheet-fed, web offset, process, and specialty inks formulated to deliver excellent viscosity, fast drying, superior adhesion, and vibrant color reproduction across a variety of paper and packaging applications. Through advanced quality control, precise color matching, and continuous product innovation, we provide dependable ink solutions that help commercial printers, publishers, and packaging manufacturers achieve outstanding print quality with every production run.",
    stats: [
      { label: "Press houses supplied", value: "180+" },
      { label: "Pantone matches on file", value: "900+" },
      { label: "Years formulating", value: "27" },
    ],
    lines: [
      {
        title: "Sheet-fed Process Inks",
        image: "/sheet_ink.png",

        desc: "CMYK sets tuned for coated and uncoated stock with predictable trapping.",
      },
      {
        title: "Web Offset Inks",
        image: "/web-ink.png",

        desc: "Fast-set formulations for heat-set and cold-set web presses running long runs.",
      },
      {
        title: "Spot & Pantone Matching",
        image: "/matching.png",

        desc: "In-house colour lab matching client Pantone references with retained formula records.",
      },
      {
        title: "Specialty Coatings",
        image: "/coating.png",

        desc: "UV, metallic and low-migration food-packaging-grade formulations on request.",
      },
    ],
    process: [
      "Pigment dispersion & viscosity testing",
      "Pantone/spot colour matching in lab",
      "Press-check on client substrate",
      "Batch formulation logged against sample",
      "Drummed, tinned or cartridge-filled dispatch",
    ],
  },
  {
    code: "DIV.04",
    key: "mobile-parts",
    slug: "/divisions/mobile-parts",
    headerImage: "/parts_header.png",
    name: "Mobile Parts & Accessories",
    short: "Mobile Parts",
    icon: Smartphone,
    color: "mobile",
    established: "2016",
    tagline:
      "Components and accessories for devices already in people\u2019s hands.",
    summary:
      "Replacement parts, cases and charging accessories sourced and tested for the models moving fastest through repair shops and retail counters.",
    stats: [
      { label: "Device models covered", value: "460+" },
      { label: "Units tested / month", value: "30K" },
      { label: "Return rate", value: "<1.2%" },
    ],
    lines: [
      {
        title: "Display Assemblies",
        image: "/assembling.png",

        desc: "LCD and OLED replacement screens graded and tested for touch response and colour accuracy.",
      },
      {
        title: "Charging & Cables",
        image: "/cables.png",

        desc: "PD and QC-rated chargers, cables and power banks tested past rated cycle counts.",
      },
      {
        title: "Cases & Protection",
        image: "/cases.png",

        desc: "Impact-rated cases and tempered glass, fitted per model rather than sold generically.",
      },
      {
        title: "Batteries & Small Parts",
        image: "/batteries.png",

        desc: "Cell-certified replacement batteries, connectors and flex cables with lot traceability.",
      },
    ],
    process: [
      "Model-specific sourcing & vetting",
      "Incoming QA against OEM spec sheets",
      "Functional and stress testing sampling",
      "Anti-static, model-labelled packing",
      "Bulk and retail-ready dispatch",
    ],
  },
];

export const getDivisionByKey = (key) => divisions.find((d) => d.key === key);
