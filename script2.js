// ── Modal data ──
// const products = {
//   lv1: {
//     brand: 'Louis Vuitton', name: 'Neverfull MM Tote',
//     features: [
//       'Monogram coated canvas exterior — durable and water-resistant',
//       'Natural cowhide leather trim, handles, and laces with patina aging',
//       'Removable zip-top pouch doubles as a clutch or wristlet',
//       'Interior zip pocket and two flat pockets for organisation',
//       'Comfortable shoulder carry with supple handles',
//       'Adjustable side laces to customise shape (open or cinched)',
//       'Microfibre lining — protects contents from scratching',
//       'Dimensions: 31 × 28 × 14 cm (MM)',
//       'Available in: Monogram, Damier Ebene, Damier Azur, and seasonal prints',
//       'Made in France — comes with dust bag and authenticity card',
//     ]
//   },
//   lv2: {
//     brand: 'Louis Vuitton', name: 'Zippy Wallet',
//     features: [
//       'Monogram coated canvas with toile lining',
//       'All-round zip closure with LV engraved zip pull',
//       '12 card slots for maximum organisation',
//       'Large bill compartment and dedicated zip coin pocket',
//       'Exterior flat pocket for quick-access cards',
//       'Dimensions: 19.5 × 10.5 × 2.5 cm',
//       'Available in Monogram, Empreinte leather, Damier canvases',
//       'Packaged with dustbag — made in France or Spain',
//     ]
//   },
//   ch1: {
//     brand: 'Chanel', name: 'Classic Flap Bag (Medium)',
//     features: [
//       'Quilted lambskin leather with iconic diamond-stitch pattern',
//       'Reissued gold-tone double-C turn-lock clasp (CC logo)',
//       'Woven gold-chain interlaced with black leather strap',
//       'Burgundy leather interior with one zip pocket and two flap pockets',
//       'Dimensions: 25 × 16.5 × 8 cm (Medium)',
//       'Multiple sizes available: Mini, Small, Medium, Jumbo, Maxi',
//       'Also available in caviar leather (more scratch-resistant)',
//       'Comes with Chanel authenticity card, serial sticker, dust bag & box',
//       'Made in France — each bag is hand-finished',
//       'Considered an investment piece with consistent value appreciation',
//     ]
//   },
//   ch2: {
//     brand: 'Chanel', name: 'Le Boy Wallet',
//     features: [
//       'Grained calfskin with Boy CC signature hardware in gold or silver tone',
//       'Full zip-around closure',
//       '10 card slots plus extra card pockets on both sides',
//       'Removable coin purse with lobster clasp',
//       'Bill compartment with a flat pocket for receipts',
//       'Dimensions: 19 × 10 × 2.5 cm',
//       'Interior lined with Chanel burgundy calfskin',
//       'Comes with authenticity card, dust bag, and box',
//     ]
//   },
//   hm1: {
//     brand: 'Hermès', name: 'Birkin 30',
//     features: [
//       'Hand-stitched Togo calfskin (pebbled, scratch-resistant) — takes 18+ hours per bag',
//       'Palladium-plated brass hardware (also available in gold-plated)',
//       'Iconic fold-over top with double leather strap and turn-lock closure (sangles)',
//       'Clochette, padlock, and two keys included',
//       'Suede interior lining with one flat pocket',
//       'Dimensions: 30 × 22 × 16 cm',
//       'Available in 300+ colours and numerous leathers (Clemence, Epsom, Ostrich, Crocodile…)',
//       'Each bag is unique — no two are identical',
//       'Made exclusively in France by a single artisan',
//       'Not available to order — allocation based on client relationship',
//     ]
//   },
//   hm2: {
//     brand: 'Hermès', name: 'Bearn Wallet',
//     features: [
//       'Epsom calfskin — textured, lightweight, and holds colour brilliantly',
//       'Single large flap with iconic H push-lock clasp in palladium',
//       '9 card slots with gusseted capacity',
//       'Flat bill compartment with separator',
//       'Dimensions: 18 × 9 × 1.5 cm',
//       'Available in over 50 Hermès colours per season',
//       'Comes with Hermès orange box and ribbon',
//       'Made in France — hand-stitched with saddle thread',
//     ]
//   },
//   gc1: {
//     brand: 'Gucci', name: 'Ophidia GG Tote',
//     features: [
//       'GG Supreme canvas with brown leather trim — coated for water-resistance',
//       'Vintage-inspired Web stripe detail (signature green-red-green)',
//       'Antique gold-toned hardware throughout',
//       'Double top handles with adjustable/removable shoulder strap',
//       'Three internal compartments with one interior zip pocket',
//       'Double zip top closure',
//       'Dimensions: 49 × 26 × 18 cm (Large) — also available in Medium & Mini',
//       'Cotton canvas lining with Gucci logo print',
//       'Made in Italy — comes with Gucci dust bag and branded packaging',
//     ]
//   },
//   gc2: {
//     brand: 'Gucci', name: 'Marmont Zip Wallet',
//     features: [
//       'Matelassé chevron leather with GG Marmont signature',
//       'Iconic Double-G hardware in antique gold tone',
//       'Full zip-around with smooth zip pull',
//       '12 card slots in two rows',
//       'Two bill compartments for different currencies or receipts',
//       'Zip coin pouch on interior',
//       'Dimensions: 19 × 10 cm',
//       'Gucci signature lining and piping',
//       'Made in Italy — comes with Gucci dust bag',
//     ]
//   },
//   pr1: {
//     brand: 'Prada', name: 'Galleria Saffiano Tote',
//     features: [
//       'Saffiano lux leather — iconic cross-hatch texture, highly scratch and water-resistant',
//       'Two turn-lock front pockets for organisation',
//       'Double zip top closure for security',
//       'Double top handles with removable/adjustable shoulder strap',
//       'Large central compartment with two flat interior pockets',
//       'Jacquard lining with Prada branding',
//       'Enamel triangular Prada logo plaque',
//       'Dimensions: 38 × 30 × 17 cm',
//       'Available in a wide range of seasonal and classic colours',
//       'Made in Italy — includes dust bag, care booklet, and authenticity card',
//     ]
//   },
//   pr2: {
//     brand: 'Prada', name: 'Saffiano Zip Wallet',
//     features: [
//       'Saffiano lux leather — cross-hatch textured, scratch and water-resistant',
//       'Full zip-around closure with signature Prada hardware',
//       '12 card slots for generous organisation',
//       'Two bill compartments with divider',
//       'Zip coin compartment with Prada logo lining',
//       'Contrast stitching throughout',
//       'Dimensions: 20 × 10 cm',
//       'Available in 20+ seasonal colours',
//       'Made in Italy — comes with Prada dust bag',
//     ]
//   },
//   bv1: {
//     brand: 'Bottega Veneta', name: 'Cassette Bag',
//     features: [
//       'Padded Intrecciato lambskin — BV\'s signature woven technique, no exterior logo',
//       'Structured rectangular silhouette — architectural and modern',
//       'Magnetic snap closure for easy access',
//       'Silver-tone ring hardware for adjustable shoulder strap',
//       'Crossbody or shoulder carry options',
//       'Interior lined in suede with one flat pocket',
//       'Dimensions: 26 × 18 × 5.5 cm',
//       'Craftsmanship takes over 80 hand-weaving steps per bag',
//       'Made in Italy — presented in BV box with ribbon and dust bag',
//       'No visible logo — intentional "stealth luxury" design philosophy',
//     ]
//   },
//   bv2: {
//     brand: 'Bottega Veneta', name: 'Intrecciato Bi-fold Wallet',
//     features: [
//       'Signature Intrecciato (woven) calfskin — entirely hand-woven from strips of leather',
//       'Completely logo-free — the craft IS the statement',
//       'Classic bi-fold format with buttery soft opening',
//       '8 card slots (4 per side) with generous capacity',
//       'Two large bill compartments',
//       'Suede lining interior for protection',
//       'Dimensions: 11 × 9 cm (folded)',
//       'Available in seasonal and heritage colours',
//       'Made in Italy — Bottega Veneta box, ribbon, and cotton dust bag',
//     ]
//   },
// };

// function openModal(id) {
//   const p = products[id];
//   if (!p) return;
//   document.getElementById('modalBrand').textContent = p.brand;
//   document.getElementById('modalTitle').textContent = p.name;
//   const body = document.getElementById('modalBody');
//   let html = `<ul class="feature-list">`;
//   p.features.forEach(f => { html += `<li>${f}</li>`; });
//   html += `</ul>
//   <div class="download-note">
//     📄 <strong>Full specification sheet</strong> available as a Word document. 
//     <a href="docs/${id}.docx" download>Click here to download the .docx file</a> to view complete technical details, care instructions, and provenance information.
//   </div>`;
//   body.innerHTML = html;
//   document.getElementById('modalOverlay').classList.add('open');
//   document.body.style.overflow = 'hidden';
// }