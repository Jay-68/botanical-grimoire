export const plants = [
  {
    id: "ficus-thonningii",
    slug: "ficus-thonningii",
    commonName: "Strangler Fig",
    localNames: ["Mugumo (Kikuyu)", "Mkuyu (Swahili)", "Fig du Thonning (French)"],
    heroColor: "moss",
    tags: ["Sacred tree", "Keystone species", "Disturbance species", "Toxic (latex)", "Pollinator-dependent"],
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Rosales",
      family: "Moraceae",
      genus: "Ficus",
      species: "F. thonningii",
      authority: "Blume, 1856",
      synonyms: ["Ficus dekdekena", "Ficus petersii"]
    },
    botanicalDescription: {
      habit: "Large, semi-deciduous tree reaching 20–30 m. Often begins life as an epiphyte, sending aerial roots to the ground that eventually envelop the host tree.",
      leaves: "Elliptic to obovate, 4–15 cm long, leathery, glossy dark green above, paler beneath. Alternate arrangement. Stipules caducous, leaving characteristic ring scars.",
      bark: "Smooth to slightly rough, grey-brown. Exudes white latex when cut.",
      flowers: "Minute, enclosed within a hollow, fleshy receptacle (syconium)—the characteristic fig. Pollination by species-specific fig wasps (Eupristina sp.).",
      fruit: "Figs 0.8–1.5 cm diameter, turning from green to red-purple when ripe. Produced continuously or seasonally depending on altitude.",
      roots: "Extensive aerial root system; surface roots may extend 10+ m from trunk base.",
      height: "20–30 m",
      spread: "15–25 m canopy spread"
    },
    ecology: {
      biome: "Afromontane forest, riparian forest, savanna woodland",
      distribution: "Sub-Saharan Africa: Kenya, Tanzania, Uganda, Ethiopia, Zimbabwe, down to South Africa. Particularly prominent in East African highlands.",
      nativeRange: "Tropical and subtropical Africa",
      altitudeRange: "0–2,400 m above sea level",
      soilPreference: "Adaptable; thrives in well-drained to seasonally waterlogged soils",
      ecologicalRole: "Keystone species. Figs provide critical food during dry seasons for over 1,200 vertebrate species in Africa. The strangler habit creates forest structure. Fruiting often triggers wildlife congregation.",
      threats: "Habitat loss; removal near urban settlements (perceived as structurally dangerous). Mugumo trees in Kenya face clearing pressures near Nairobi.",
      invasionStatus: "Non-invasive in native range"
    },
    chemicalProfile: {
      primaryCompounds: [
        { name: "Ficin", type: "Proteolytic enzyme", notes: "Present in latex; used in meat tenderising and anti-parasitic applications" },
        { name: "Flavonoids (quercetin, rutin)", type: "Polyphenols", notes: "Antioxidant and anti-inflammatory activity documented" },
        { name: "Psoralen", type: "Furanocoumarin", notes: "Phototoxic; found in leaves and latex" }
      ],
      toxicity: "Latex is a mild skin irritant. Ingestion of raw latex causes gastrointestinal irritation. Figs are non-toxic to humans; mildly sedative in large quantities to some bird species.",
      medicinalUses: "Bark decoctions used in traditional medicine for malaria, dysentery, and fever. Root extracts studied for antimicrobial properties. Latex applied topically for skin conditions."
    },
    uses: {
      medicinal: "Bark and root preparations used across East Africa for fever, respiratory infections, and gastrointestinal complaints. Latex applied to skin lesions. Under formal phytochemical investigation.",
      ecological: "Critical keystone resource in faunal communities. Planted in agroforestry for shade, soil stabilization, and fodder. Aerial roots used for binding and basketry.",
      cultural: "Sacred tree among the Kikuyu people of Kenya. Considered the dwelling of Ngai (God) and ancestral spirits. Circumcision and other rites performed near significant specimens. Protected under customary law.",
      timber: "Wood is light and soft; not preferred for construction but used for household items and firewood.",
      food: "Figs consumed fresh by humans and livestock. Important famine food historically."
    },
    symbolism: {
      disclaimer: "The following section documents cultural and symbolic interpretations. It is not scientific data.",
      archetypes: "The Encompasser. The Slow Predator. The Sacred Host.",
      culturalMeaning: "Across sub-Saharan Africa, fig trees represent the intersection of human, spirit, and ecological worlds. The Kikuyu 'mugumo' is a site of prayer and divination—to fell one is traditionally associated with calamity.",
      themes: ["Sacred ground", "Patience as power", "Transformation through embrace", "The cost of hospitality"],
      philosophicalNote: "The strangler fig does not begin as a tree. It begins as a seed in a bird's gut, dropped into a wound high in another tree's canopy. It grows downward while the host grows upward. Over decades, what began as dependency becomes burial. Is this violence or succession? Biology does not answer.",
      crossCulturalLinks: "The fig (Ficus) genus appears in mythological systems worldwide—Bodhi tree (F. religiosa), the fig of Eden debates, Roman myth of the ficus ruminalis. The thonningii is Africa's local face of a globally-mythologized genus."
    },
    grimoireClassification: {
      ontologicalStatus: "Threshold organism — occupies border zones between life stages, ecological roles, and symbolic orders",
      archetypeSignature: "The Patient Sovereign",
      primaryTheme: "Boundary dissolution",
      secondaryThemes: ["Structural domination through time", "The sacred as ecologically functional", "Survival through entanglement"],
      element: "Earth and Air (aerial roots bridging both)",
      season: "Perennial; a-seasonal in symbolism"
    },
    reflection: "The mugumo does not require our mythology. It performs its role regardless: feeding hornbills and baboons, stabilizing stream banks, providing shade for cattle. The sacred merely names what the forest already knows — that some presences are load-bearing.",
    fieldNotes: [
      {
        location: "Ngong Hills, Nairobi County, Kenya",
        date: "June 2023",
        observer: "M. Waweru",
        note: "A 15 m specimen at the forest edge shows full aerial root system. Approximately 40 Sykes' monkeys observed foraging simultaneously at dawn. Marabou storks roosting in upper canopy."
      },
      {
        location: "Karura Forest, Nairobi",
        date: "November 2022",
        observer: "Field team",
        note: "Older mugumo near the forest shrine has been preserved through community agreement despite surrounding residential development pressure."
      }
    ]
  },
  {
    id: "duranta-erecta",
    slug: "duranta-erecta",
    commonName: "Golden Dewdrop",
    localNames: ["Pigeon Berry", "Sky Flower", "Adonis Flower", "Shefalika (India)"],
    heroColor: "umber",
    tags: ["Toxic but ornamental", "Invasive species", "Pollinator-dependent", "Urban species"],
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Lamiales",
      family: "Verbenaceae",
      genus: "Duranta",
      species: "D. erecta",
      authority: "L., 1753",
      synonyms: ["Duranta plumieri", "Duranta repens"]
    },
    botanicalDescription: {
      habit: "Shrub to small tree, 2–6 m, often sprawling. Can be trained as a hedge. Stems may bear spines.",
      leaves: "Ovate to elliptic, 2–7 cm, bright green, opposite or whorled, slightly toothed margin.",
      bark: "Smooth, grey-brown on mature stems; younger stems green and flexible.",
      flowers: "Small, tubular, 5-lobed, in terminal or axillary racemes. Typically lavender-blue to purple with white margins; white-flowered cultivars common. Strongly fragrant.",
      fruit: "Clusters of bright yellow-orange drupes, 1–1.5 cm. Toxic to humans and many mammals. Highly attractive to birds.",
      roots: "Fibrous, moderately deep. Drought-tolerant once established.",
      height: "2–6 m",
      spread: "2–4 m"
    },
    ecology: {
      biome: "Tropical and subtropical, now pantropical through cultivation",
      distribution: "Native to Caribbean, Central and South America. Now naturalized across East Africa, Southeast Asia, Australia, and Pacific islands. Common in Nairobi gardens and roadsides.",
      nativeRange: "Caribbean and Central America",
      altitudeRange: "0–1,800 m",
      soilPreference: "Wide tolerance; prefers well-drained but adapts readily to poor soils",
      ecologicalRole: "Provides nectar for butterflies, bees, and sunbirds. Fruits consumed by birds (bulbuls, starlings), which disperse seeds into natural habitats.",
      threats: "Listed as invasive in Australia, South Africa, and Pacific islands. Escapes cultivation readily via bird dispersal.",
      invasionStatus: "Invasive — Category 3 weed in parts of South Africa; watch list in East Africa"
    },
    chemicalProfile: {
      primaryCompounds: [
        { name: "Saponins (durantoside I–IV)", type: "Triterpene saponins", notes: "Concentrated in berries; primary toxic agents. Cause vomiting, fever, convulsions in humans." },
        { name: "Lamiide", type: "Iridoid glycoside", notes: "Found in leaves; contributes to mild insecticidal activity" },
        { name: "Caffeic acid derivatives", type: "Polyphenols", notes: "Anti-inflammatory activity in leaf extracts" }
      ],
      toxicity: "Berries are toxic to humans and cats. Children are at risk due to attractive yellow-orange appearance. Reported cases of poisoning include vomiting, fever, drowsiness, and convulsions. Generally non-fatal but medical attention required.",
      medicinalUses: "Leaf extracts used in folk medicine across Latin America and South Asia for fever, malaria, and skin conditions. Preliminary research suggests antifungal and antimicrobial properties."
    },
    uses: {
      medicinal: "Leaf decoctions used in traditional medicine for fevers and skin complaints. Not formally approved. Caution required due to toxic saponins in fruit.",
      ecological: "Provides nectar corridor for urban pollinators. Often used as live hedging and ornamental border planting. Bird dispersal makes it ecologically double-edged.",
      cultural: "Popular ornamental globally. Frequently planted in East African domestic gardens and institutional grounds. Often placed near gates and boundaries as a decorative hedge.",
      timber: "Not commercially significant. Wood sometimes used for small carved items.",
      food: "Not edible. Berries toxic. Flowers occasionally used in perfumery experiments."
    },
    symbolism: {
      disclaimer: "The following section documents cultural and symbolic interpretations. It is not scientific data.",
      archetypes: "The Beautiful Liar. The Attractive Danger. The Ornamental Invader.",
      culturalMeaning: "In several Caribbean traditions, the plant is associated with protection and warning simultaneously—a boundary plant that signals 'here is a threshold.' Its toxic beauty makes it a recurring metaphor in poetry from the Americas.",
      themes: ["Deception", "The beauty-toxicity paradox", "Invasion under invitation", "Boundary marking"],
      philosophicalNote: "We planted it because we loved the colour. Then the birds ate the berries and carried the seeds beyond the fence, and now it grows in places we did not choose. The invasion was carried out by beauty—and by us. The plant merely followed the logic we gave it.",
      crossCulturalLinks: "The trope of 'poisonous fruit' appears across folkloric systems. Duranta is a living illustration—more candid than allegorical."
    },
    grimoireClassification: {
      ontologicalStatus: "Liminal coloniser — functions as ornamental at edges, invasive in natural gaps",
      archetypeSignature: "The Beautiful Intruder",
      primaryTheme: "Deception",
      secondaryThemes: ["The corruption of invitation", "Ecological manipulation via aesthetics", "Unintended consequences"],
      element: "Air (dispersal by bird and wind)",
      season: "Year-round flowering in tropics; symbolically associated with deceptive seasons"
    },
    reflection: "The problem with Duranta is not malice. It is seduction without consequence—for the plant. For the ecosystem, there is consequence. We are learning that beauty is not a sufficient credential for invitation.",
    fieldNotes: [
      {
        location: "Westlands, Nairobi",
        date: "March 2024",
        observer: "Urban Ecology Survey",
        note: "Common African bulbul observed consuming berries from garden specimen and departing toward adjacent green belt. 6 seedlings found 40 m into Nairobi River riparian zone."
      }
    ]
  },
  {
    id: "euphorbia-milii",
    slug: "euphorbia-milii",
    commonName: "Crown of Thorns",
    localNames: ["Christ Plant", "Christ Thorn", "Corona de Cristo (Spanish)", "Msalamia (Swahili)"],
    heroColor: "crimson",
    tags: ["Toxic but ornamental", "Drought-resistant", "Sacred (Christian tradition)", "Succulent"],
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Malpighiales",
      family: "Euphorbiaceae",
      genus: "Euphorbia",
      species: "E. milii",
      authority: "Des Moul., 1826",
      synonyms: ["Euphorbia splendens", "Euphorbia bojeri"]
    },
    botanicalDescription: {
      habit: "Succulent shrub, 0.5–1.8 m, densely armed with hard, sharp spines up to 3 cm. Slow-growing but long-lived.",
      leaves: "Bright green, ovate to obovate, 1.5–3.5 cm, clustered near stem tips. Deciduous in dry conditions; quickly replaced after rain.",
      bark: "Stem grey-brown, fleshy, heavily ridged and armed. Succulent stem stores water.",
      flowers: "Inconspicuous cyathia surrounded by two showy bracts (typically red, also yellow, white, pink in cultivars). Blooms nearly year-round in warm climates.",
      fruit: "Small, 3-lobed capsule. Explosive dehiscence disperses seeds.",
      roots: "Deep taproot system enabling drought survival.",
      height: "0.5–1.8 m",
      spread: "0.5–1.2 m"
    },
    ecology: {
      biome: "Tropical dry deciduous forest and scrubland",
      distribution: "Native to Madagascar. Now pantropically cultivated. Naturalised in parts of East Africa, Florida, and the Pacific. Common in Kenyan coastal gardens.",
      nativeRange: "Madagascar",
      altitudeRange: "0–1,200 m",
      soilPreference: "Well-drained, sandy, or rocky soils. Highly drought tolerant. Will not survive waterlogging.",
      ecologicalRole: "Provides nectar for sunbirds and butterflies. Dense spine structure offers nesting refuge for small birds. Minimal ecological footprint outside native range.",
      threats: "Vulnerable in Madagascar due to habitat loss and over-collection. Despite cultivation proliferation, wild populations are declining.",
      invasionStatus: "Non-invasive outside cultivation in most regions"
    },
    chemicalProfile: {
      primaryCompounds: [
        { name: "Milliamine E", type: "Macrocyclic diterpene ester", notes: "Toxic; skin and mucous membrane irritant. Tumour-promoting co-carcinogen." },
        { name: "Ingenol derivatives", type: "Diterpene esters", notes: "Potent skin irritants; under investigation for topical oncology applications (related compounds used in actinic keratosis)" },
        { name: "Euphorbol esters", type: "Tetracyclic diterpene", notes: "Anti-inflammatory activity in low doses; toxic in higher concentrations" }
      ],
      toxicity: "White latex is toxic. Contact causes skin irritation, blistering, and temporary blindness if it contacts eyes. Ingestion causes severe gastrointestinal irritation. All parts toxic to dogs and cats. Despite Christian symbolism, the plant is not benign.",
      medicinalUses: "Used in traditional medicine in Madagascar and parts of Africa for warts and skin lesions (topical application of diluted latex, with risk). Formal pharmacological research ongoing into anti-tumor compounds."
    },
    uses: {
      medicinal: "Latex used cautiously in topical traditional medicine. Active compounds under investigation for cancer therapy applications. Not for internal use.",
      ecological: "Ornamental hedge and container plant worldwide. Provides bird nesting structure. Negligible invasive risk in most regions.",
      cultural: "Strong Christian symbolic association as a candidate for the crown of thorns. Widely cultivated in churches, missions, and domestic settings across Africa and South America. Given as blessings and gifts.",
      timber: "Not applicable. Stem used occasionally in regional folk craft.",
      food: "Not edible. No food use."
    },
    symbolism: {
      disclaimer: "The following section documents cultural and symbolic interpretations. It is not scientific data.",
      archetypes: "The Sacred Wound. The Armoured Survivor. The Beautiful Suffering.",
      culturalMeaning: "Named for its association with the Passion narrative, this plant has become one of the most symbolically loaded objects in global Christianity. Its year-round blood-red flowering and formidable thorns make the association almost too convenient—and yet, it is a Madagascar succulent, entirely unknown to Judaea.",
      themes: ["Sacred suffering", "Resilience through armouring", "The collision of geography and myth", "Beauty sustained by difficulty"],
      philosophicalNote: "The plant was in Madagascar when Christ was in Jerusalem. The association is ours—made centuries later by missionaries who needed a metaphor they could grow. This is not an error. It is how myth works: it migrates to whatever living form can carry it. The plant doesn't know what we've put on it.",
      crossCulturalLinks: "The 'crown of thorns' metaphor appears independently in multiple martyrology traditions. Euphorbia milii became the Christian candidate through French colonial botany. In Thailand, it is used for entirely different protective-boundary magic."
    },
    grimoireClassification: {
      ontologicalStatus: "Myth-bearer — a real organism that has absorbed a mythological identity from a tradition geographically unrelated to its origin",
      archetypeSignature: "The Marked Survivor",
      primaryTheme: "Sacred suffering",
      secondaryThemes: ["The anachronism of symbol", "Endurance as a form of testimony", "The myth that migrated"],
      element: "Fire (in coloration and wounding)",
      season: "Year-round; associated with vigil seasons in Christian liturgical calendar"
    },
    reflection: "It does not know it bears the name. The spines were there before the story. They evolved not for theological resonance but to deter the lemurs of Madagascar. We looked at the thorns and saw ourselves. That, perhaps, is more revealing about us than about the plant.",
    fieldNotes: [
      {
        location: "Old Town, Mombasa, Kenya",
        date: "January 2024",
        observer: "Coastal Survey",
        note: "Specimen maintained in church courtyard, reportedly planted in 1934. Approximately 1.4 m height, structural crown intact. Continual red flowering observed."
      }
    ]
  },
  {
    id: "rumex-usambarensis",
    slug: "rumex-usambarensis",
    commonName: "Usambara Dock",
    localNames: ["Shebu (Usambara)", "Wild Sorrel", "Mountain Dock (Kenya highlands)"],
    heroColor: "moss",
    tags: ["Disturbance species", "Edible", "Medicinal", "East Africa endemic", "Acidic soil indicator"],
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Caryophyllales",
      family: "Polygonaceae",
      genus: "Rumex",
      species: "R. usambarensis",
      authority: "(Dammer) Dammer, 1902",
      synonyms: ["Acetosa usambarensis"]
    },
    botanicalDescription: {
      habit: "Erect perennial herb, 30–90 cm. Branched flowering stems. Grows from a persistent rootstock, resprouting reliably after fire or cutting.",
      leaves: "Basal leaves long-petiolate, lanceolate to hastate, 10–25 cm. Upper leaves smaller, sessile with ocrea (sheathing stipule). Leaf surface may have slight waxy coating.",
      bark: "Stems ribbed, green to reddish-green. Often hollow between nodes on mature specimens.",
      flowers: "Tiny, greenish, in whorled racemes. Wind-pollinated. Flowers from May to August in highland Kenya.",
      fruit: "3-winged achene characteristic of Rumex. Reddish at maturity. Winged fruits disperse via wind.",
      roots: "Persistent taproot with horizontal runners. Can regenerate from root fragments—a trait enabling persistence in disturbed soil.",
      height: "30–90 cm",
      spread: "30–60 cm clump"
    },
    ecology: {
      biome: "Afromontane grassland, forest margins, disturbed ground, roadsides",
      distribution: "Endemic to East Africa: Tanzania (Usambara Mountains as type locality), Kenya highlands, Rwanda, parts of Uganda. Altitude-preferring.",
      nativeRange: "East Africa (Afromontane zone)",
      altitudeRange: "1,200–3,200 m above sea level",
      soilPreference: "Slightly acidic soils; often found in compacted, overgrazed, or disturbed areas. Tolerates low fertility.",
      ecologicalRole: "Pioneer species on disturbed ground. Prevents erosion on bare slopes. Colonizes fire-cleared areas. Provides ground cover in degraded Afromontane zones.",
      threats: "Not threatened. Abundance actually increasing with land disturbance across highland Kenya and Tanzania.",
      invasionStatus: "Non-invasive; native pioneer"
    },
    chemicalProfile: {
      primaryCompounds: [
        { name: "Oxalic acid", type: "Organic acid", notes: "Responsible for sour taste. High concentrations in leaves may affect calcium absorption if consumed excessively." },
        { name: "Anthraquinone glycosides (emodin, chrysophanol)", type: "Anthraquinones", notes: "Present in roots; laxative and antimicrobial activity" },
        { name: "Tannins", type: "Polyphenols", notes: "Astringent; contribute to wound-healing and antimicrobial folk uses" },
        { name: "Flavonoids (hyperoside, vitexin)", type: "Flavonoids", notes: "Anti-inflammatory; found in leaf extract" }
      ],
      toxicity: "Mildly toxic if large quantities of fresh leaves consumed due to oxalic acid. Safe in typical culinary use. Not recommended for individuals with kidney stones or gout.",
      medicinalUses: "Root preparations used traditionally for wound healing, skin infections, and as a laxative. Leaves used as a sourness agent in East African highland cooking. Documented in Tanzanian ethnomedical literature."
    },
    uses: {
      medicinal: "Root extracts used in Tanzanian and Kenyan traditional medicine for skin diseases and stomach complaints. Anthraquinones studied for antibacterial efficacy. Leaf preparations for fever.",
      ecological: "Rapid ground-cover pioneer on disturbed highland soils. Valued in restoration of degraded Afromontane grasslands. Serves as indicator species for soil disturbance and acidity.",
      cultural: "Consumed as a vegetable in highland communities of Kenya and Tanzania—leaves added to stews for sourness. Taught to children as edible survival plant in rural Usambara communities.",
      timber: "Not applicable.",
      food: "Young leaves edible, with sour flavour. Used in stews, soups, and fresh relish preparations across highland East Africa. Important supplemental food source."
    },
    symbolism: {
      disclaimer: "The following section documents cultural and symbolic interpretations. It is not scientific data.",
      archetypes: "The Unnoticed Sustainer. The Modest Restorer. The Useful Nobody.",
      culturalMeaning: "No major mythological tradition has claimed the dock. It grows where no one planted it, it feeds people who don't cultivate it, and it stabilizes ground that humanity has broken. Its cultural power is entirely functional.",
      themes: ["Resilience", "The overlooked", "Recovery as quiet work", "The virtue of persistence without prestige"],
      philosophicalNote: "The Usambara dock is absent from myth not because it lacks importance, but because it is too reliable to fear or celebrate. We make myths about things that surprise us—the strangler fig that kills, the toxic berry that tempts. The dock just returns after the fire. Again and again. This is its only statement.",
      crossCulturalLinks: "The Rumex genus (docks and sorrels) appears in European folk medicine and survival lore. R. usambarensis is the East African mountain representative of this globally-useful genus—a functional constant across cultures."
    },
    grimoireClassification: {
      ontologicalStatus: "Foundational species — present before and after human disturbance cycles; witness organism",
      archetypeSignature: "The Patient Restorer",
      primaryTheme: "Resilience",
      secondaryThemes: ["The dignity of the mundane", "Restoration without recognition", "Persisting through disturbance"],
      element: "Earth",
      season: "Associated with seasons of aftermath — post-fire, post-flood, post-clearing"
    },
    reflection: "There is a kind of wisdom that does not seek to be read. The dock returns after the fire not as a statement, but as a fact. In ecosystems, as in human communities, the recovery is most often done by those we do not notice until they are gone.",
    fieldNotes: [
      {
        location: "Usambara Mountains, Tanzania",
        date: "September 2022",
        observer: "Tanzania Highland Survey",
        note: "Dense stands on recently burned grassland margin. First coloniser observed post-fire, appearing within 3 weeks of burn. Kikuyu grass and other species followed."
      },
      {
        location: "Aberdare Ranges, Kenya",
        date: "April 2023",
        observer: "H. Kamau",
        note: "Roadside specimens consumed by passing herders as a supplement during travel. Described as 'shebu' and collected without cultivation. Persistent even in heavily grazed sections."
      }
    ]
  },
  {
    id: "duranta-erecta",
    slug: "duranta-erecta",
    commonName: "Golden Dewdrop",
    localNames: ["Pigeon Berry", "Sky Flower", "Adonis Flower", "Shefalika (India)"],
    heroColor: "umber",
    tags: ["Toxic but ornamental", "Invasive species", "Pollinator-dependent", "Urban species"],
    taxonomy: {
      kingdom: "Plantae",
      division: "Magnoliophyta",
      class: "Magnoliopsida",
      order: "Lamiales",
      family: "Verbenaceae",
      genus: "Duranta",
      species: "D. erecta",
      authority: "L., 1753",
      synonyms: ["Duranta plumieri", "Duranta repens"]
    },
    botanicalDescription: {
      habit: "Shrub to small tree, 2–6 m, often sprawling. Can be trained as a hedge. Stems may bear spines.",
      leaves: "Ovate to elliptic, 2–7 cm, bright green, opposite or whorled, slightly toothed margin.",
      bark: "Smooth, grey-brown on mature stems; younger stems green and flexible.",
      flowers: "Small, tubular, 5-lobed, in terminal or axillary racemes. Typically lavender-blue to purple with white margins; white-flowered cultivars common. Strongly fragrant.",
      fruit: "Clusters of bright yellow-orange drupes, 1–1.5 cm. Toxic to humans and many mammals. Highly attractive to birds.",
      roots: "Fibrous, moderately deep. Drought-tolerant once established.",
      height: "2–6 m",
      spread: "2–4 m"
    },
    ecology: {
      biome: "Tropical and subtropical, now pantropical through cultivation",
      distribution: "Native to Caribbean, Central and South America. Now naturalized across East Africa, Southeast Asia, Australia, and Pacific islands. Common in Nairobi gardens and roadsides.",
      nativeRange: "Caribbean and Central America",
      altitudeRange: "0–1,800 m",
      soilPreference: "Wide tolerance; prefers well-drained but adapts readily to poor soils",
      ecologicalRole: "Provides nectar for butterflies, bees, and sunbirds. Fruits consumed by birds (bulbuls, starlings), which disperse seeds into natural habitats.",
      threats: "Listed as invasive in Australia, South Africa, and Pacific islands. Escapes cultivation readily via bird dispersal.",
      invasionStatus: "Invasive — Category 3 weed in parts of South Africa; watch list in East Africa"
    },
    chemicalProfile: {
      primaryCompounds: [
        { name: "Saponins (durantoside I–IV)", type: "Triterpene saponins", notes: "Concentrated in berries; primary toxic agents. Cause vomiting, fever, convulsions in humans." },
        { name: "Lamiide", type: "Iridoid glycoside", notes: "Found in leaves; contributes to mild insecticidal activity" },
        { name: "Caffeic acid derivatives", type: "Polyphenols", notes: "Anti-inflammatory activity in leaf extracts" }
      ],
      toxicity: "Berries are toxic to humans and cats. Children are at risk due to attractive yellow-orange appearance. Reported cases of poisoning include vomiting, fever, drowsiness, and convulsions. Generally non-fatal but medical attention required.",
      medicinalUses: "Leaf extracts used in folk medicine across Latin America and South Asia for fever, malaria, and skin conditions. Preliminary research suggests antifungal and antimicrobial properties."
    },
    uses: {
      medicinal: "Leaf decoctions used in traditional medicine for fevers and skin complaints. Not formally approved. Caution required due to toxic saponins in fruit.",
      ecological: "Provides nectar corridor for urban pollinators. Often used as live hedging and ornamental border planting. Bird dispersal makes it ecologically double-edged.",
      cultural: "Popular ornamental globally. Frequently planted in East African domestic gardens and institutional grounds. Often placed near gates and boundaries as a decorative hedge.",
      timber: "Not commercially significant. Wood sometimes used for small carved items.",
      food: "Not edible. Berries toxic. Flowers occasionally used in perfumery experiments."
    },
    symbolism: {
      disclaimer: "The following section documents cultural and symbolic interpretations. It is not scientific data.",
      archetypes: "The Beautiful Liar. The Attractive Danger. The Ornamental Invader.",
      culturalMeaning: "In several Caribbean traditions, the plant is associated with protection and warning simultaneously—a boundary plant that signals 'here is a threshold.' Its toxic beauty makes it a recurring metaphor in poetry from the Americas.",
      themes: ["Deception", "The beauty-toxicity paradox", "Invasion under invitation", "Boundary marking"],
      philosophicalNote: "We planted it because we loved the colour. Then the birds ate the berries and carried the seeds beyond the fence, and now it grows in places we did not choose. The invasion was carried out by beauty—and by us. The plant merely followed the logic we gave it.",
      crossCulturalLinks: "The trope of 'poisonous fruit' appears across folkloric systems. Duranta is a living illustration—more candid than allegorical."
    },
    grimoireClassification: {
      ontologicalStatus: "Liminal coloniser — functions as ornamental at edges, invasive in natural gaps",
      archetypeSignature: "The Beautiful Intruder",
      primaryTheme: "Deception",
      secondaryThemes: ["The corruption of invitation", "Ecological manipulation via aesthetics", "Unintended consequences"],
      element: "Air (dispersal by bird and wind)",
      season: "Year-round flowering in tropics; symbolically associated with deceptive seasons"
    },
    reflection: "The problem with Duranta is not malice. It is seduction without consequence—for the plant. For the ecosystem, there is consequence. We are learning that beauty is not a sufficient credential for invitation.",
    fieldNotes: [
      {
        location: "Westlands, Nairobi",
        date: "March 2024",
        observer: "Urban Ecology Survey",
        note: "Common African bulbul observed consuming berries from garden specimen and departing toward adjacent green belt. 6 seedlings found 40 m into Nairobi River riparian zone."
      }
    ]
  }
];

export const taxonomyTree = {
  name: "Plantae",
  children: [
    {
      name: "Magnoliophyta",
      children: [
        {
          name: "Magnoliopsida",
          children: [
            {
              name: "Rosales",
              children: [
                { name: "Moraceae", children: [{ name: "Ficus thonningii", id: "ficus-thonningii", isLeaf: true }] }
              ]
            },
            {
              name: "Lamiales",
              children: [
                { name: "Verbenaceae", children: [{ name: "Duranta erecta", id: "duranta-erecta", isLeaf: true }] }
              ]
            },
            {
              name: "Malpighiales",
              children: [
                { name: "Euphorbiaceae", children: [{ name: "Euphorbia milii", id: "euphorbia-milii", isLeaf: true }] }
              ]
            },
            {
              name: "Caryophyllales",
              children: [
                { name: "Polygonaceae", children: [{ name: "Rumex usambarensis", id: "rumex-usambarensis", isLeaf: true }] }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const archetypeThemes = [
  "Boundary dissolution", "Deception", "Sacred suffering", "Resilience",
  "Keystone presence", "Invasion under invitation", "The overlooked",
  "Transformation through embrace", "Patient restoration"
];

export const ecologicalRoles = [
  "Keystone species", "Disturbance species", "Invasive species",
  "Pioneer species", "Medicinal plant", "Sacred tree", "Edible"
];

export const regions = [
  "East Africa", "Kenya", "Tanzania", "Madagascar", "Caribbean",
  "Afromontane", "Pantropical"
];
