import Bag from './Bag.js';

/**
 * @type {Bag[]}
 */
const newBags = [
	new Bag({
		brand: 'Coach',
		name: 'Coach Tabby 20 Quilted Denim Shoulder Bag',
		price: 450.00,
		info: {
			description: `Coach reimagines its classic tabby bag, taking cues from the ‘90s with its blue quilted denim silhouette. It is adorned with contrast topstitching to resemble classic denim pieces. Style yours with an oversized tee tucked into a denim mini skirt and cowboy boots. `,
			benefits: [
				'Coach Tabby 20 shoulder bag',
				'Blue quilted denim',
				'Chain-trimmed shoulder strap, designer plaque, slip pocket, gold-tone hardware',
				'Internal magnetic flap pocket, two compartments, fully lined',
				'Designer colour: Indigo'
			],
			features: [
				'Magnetic front flap closure',
				'Dimensions: H: 11cm x W: 21cm x D: 7cm. Strap drop: 30-54cm.'
			],
			details: [[
				'Range',
				'TABBY'
			], [
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/15063672-1205127625028082.jpg',
			'https://static.thcdn.com/productimg/960/960/15063672-9815134648504140.jpg',
			'https://static.thcdn.com/productimg/960/960/15063672-1815127625049046.jpg',
			'https://static.thcdn.com/productimg/960/960/15063672-1465127625071408.jpg',
			'https://static.thcdn.com/productimg/960/960/15063672-1435127625102548.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Denim Cargo Logo-Embroidered Denim Tote Bag',
		price: 295.00,
		info: {
			description: `Coach's Cargo tote bag is designed to hold everything you need and then some, making it the perfect daily plus-one. With compartments on both sides with fastenings to secure your smaller valuables, it's finished in indigo denim with gold-tone accents for '00s appeal.`,
			benefits: [
				'Coach Cargo tote bag',
				'Tonal blue denim',
				'Detachable top handle and shoulder strap, slip pocket, designer tag, gold-tone hardware',
				'Internal zipped compartments, slip pocket, fully lined',
				'Designer colour: Indigo'
			],
			features: [
				'Open top closure',
				'Dimensions: H: 25cm x W: 24cm x W: 15cm. Handle drop: 14cm. Strap drop: 53cm.'
			],
			details: [[
				'Range',
				'CARGO'
			], [
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/15063702-8695127901625322.jpg',
			'https://static.thcdn.com/productimg/960/960/15063702-1555134648998477.jpg',
			'https://static.thcdn.com/productimg/960/960/15063702-5505127626538918.jpg',
			'https://static.thcdn.com/productimg/960/960/15063702-1845127626567991.jpg',
			'https://static.thcdn.com/productimg/960/960/15063702-1125127626593950.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Cassie 19 Denim Crossbody Bag',
		price: 295.00,
		info: {
			description: `With a design reminiscent of jeans' front flap pocket, Coach's Cassy 19 crossbody bag exudes '00s appeal. It's rendered in a compact size from denim this time and includes the 'C' plaque twist-lock closure that's a regular feature in their collections.`,
			benefits: [
				'Coach Cassie 19 crossbody bag',
				'Mid-blue denim',
				'Detachable shoulder strap and top handle, designer tag, slip pocket, gold-tone hardware',
				'Fully lined',
				'Designer colour: Indigo'
			],
			features: [
				'Twist-lock front flap closure',
				'Dimensions: H: 16cm x W: 19.5cm x D: 8cm'
			],
			details: [[
				'Range',
				'CASSIE'
			], [
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/15063677-1765127901705995.jpg',
			'https://static.thcdn.com/productimg/960/960/15063677-5685134648597560.jpg',
			'https://static.thcdn.com/productimg/960/960/15063677-1525127625303032.jpg',
			'https://static.thcdn.com/productimg/960/960/15063677-1475127625323357.jpg',
			'https://static.thcdn.com/productimg/960/960/15063677-5575127625350858.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Tabby 20 Leather and Coated-Canvas Shoulder Bag',
		price: 350.00,
		info: {
			description: `Coach's signature Tabby line exhibits the timeless pull of compact shoulder bags. In this 20 model, a pink monogram-stamped body is complemented with silver-tone hardware. Cleverly concealed compartments provide room for your smaller treasures.`,
			benefits: [
				'Coach Signature Tabby 20 shoulder bag',
				'Tonal pink leather and coated-canvas',
				'Detachable top handle and shoulder strap, slip pocket, designer tag, silver-tone hardware',
				'Internal zipped compartments, slip pocket, fully lined',
				'Designer colour: Vivid Pink'
			],
			features: [
				'Magnetic front flap closure',
				'Dimensions: H: 10cm x W: 20cm x D: 7.5cm. Strap drop: 54cm.'
			],
			details: [[
				'Range',
				'TABBY'
			], [
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/15063698-9335130779708454.jpg',
			'https://static.thcdn.com/productimg/960/960/15063698-6545134648936449.jpg',
			'https://static.thcdn.com/productimg/960/960/15063698-1725130779756886.jpg',
			'https://static.thcdn.com/productimg/960/960/15063698-1885130779788422.jpg',
			'https://static.thcdn.com/productimg/960/960/15063698-1405127626404647.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Signature Mini Skinny Coated-Canvas Cardholder',
		price: 75.00,
		info: {
			description: `Coach presents its cardholder in a pink coated-canvas, adorned with its iconic 'C' monogram. There's a silver-tone plaque on one side, while the other provides a secure place to hold your ID, cards and receipts. It has a zipped centre compartment for coins and a lobster clasp fastening to secure it in your bag or jeans.`,
			benefits: [
				'Coach Signature cardholder',
				'Pink monogram coated-canvas and leather',
				'Designer plaque, ID slot, three card slots',
				'Designer colour: Vivid Pink'
			],
			features: [
				'Zip closure',
				'Dimensions: H: 8cm x W: 11cm'
			],
			details: [[
				'Range',
				'SLG'
			], [
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/15063689-1855127902220306.jpg',
			'https://static.thcdn.com/productimg/960/960/15063689-5635127625928343.jpg',
			'https://static.thcdn.com/productimg/960/960/15063689-9575127625944696.jpg',
			'https://static.thcdn.com/productimg/960/960/15063689-1515127625966092.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Cargo Tote 26 Cotton Canvas Bag',
		price: 195.00,
		info: {
			description: `A scaled-down iteration of the original Cargo Tote, this 26" version is made from black cotton canvas with a contrasting retro-style logo. Two top handles and an adjustable crossbody strap offer versatile carrying.`,
			benefits: [
				'Coach Cargo Tote 26 bag',
				'Black cotton canvas',
				'Top handles, designer logo'
			],
			features: [
				'Zip closure',
				'Dimensions: H: 19.5cm x W: 26cm x D: 13cm'
			],
			details: [[
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14944228-8615098076675688.jpg',
			'https://static.thcdn.com/productimg/960/960/14944228-1985098076740383.jpg',
			'https://static.thcdn.com/productimg/960/960/14944228-6165098076820666.jpg',
			'https://static.thcdn.com/productimg/960/960/14944228-8905098076872644.jpg',
			'https://static.thcdn.com/productimg/960/960/14944228-2015098076922261.jpg',
			'https://static.thcdn.com/productimg/960/960/14944228-7125098076973027.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Signature C Coated Canvas Crossbody Phone Bag',
		price: 175.00,
		info: {
			description: `Coach renders tech timeless with this Signature C phone case. Made from coated canvas, this classic case features the coveted C monogram in tonal brown detail and is offset with classic tan leather trims. Slip this on across the body or keep it layered under your trench when moving through the city.`,
			benefits: [
				'Coach Signature C phone crossbody bag',
				'Tonal brown coated canvas, tan leather',
				'Detachable crossbody strap, logo plaque',
				'Designer colour: Tan Rust'
			],
			features: [
				'Dimensions: H: 17cm x W: 11.5cm x D: 2.5cm'
			],
			details: [[
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14883688-5845083837454346.jpg',
			'https://static.thcdn.com/productimg/960/960/14883688-7165085155347938.jpg',
			'https://static.thcdn.com/productimg/960/960/14883688-1075083837492794.jpg',
			'https://static.thcdn.com/productimg/960/960/14883688-1255083837540515.jpg',
			'https://static.thcdn.com/productimg/960/960/14883688-8435083837592361.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Hobo Leather Crossbody Bag',
		price: 350.00,
		info: {
			description: `With its black, crescent-shaped silhouette and signature logo detailing, the Coach hobo bag adds a touch of elegance to your wardrobe. The leather piece features a spacious interior, perfect for fitting your everyday essentials, and also includes a slip pocket. Pair with an oversized blazer and sunglasses for an effortless, laid-back look.`,
			benefits: [
				'Coach crossbody bag',
				'Black leather',
				'Adjustable handle and strap, logo plaque, designer tag, black-tone hardware',
				'Internal slip pocket and card slot'
			],
			features: [
				'Zip fastening',
				'Dimensions: H: 13.9cm x W: 25.9cm x D: 7.9cm'
			],
			details: [[
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14944256-1385098081897047.jpg',
			'https://static.thcdn.com/productimg/960/960/14944256-3675098081954011.jpg',
			'https://static.thcdn.com/productimg/960/960/14944256-5545098078943466.jpg',
			'https://static.thcdn.com/productimg/960/960/14944256-2025098079031156.jpg',
			'https://static.thcdn.com/productimg/960/960/14944256-9945098079085177.jpg',
			'https://static.thcdn.com/productimg/960/960/14944256-9645098082471772.jpg',
			'https://static.thcdn.com/productimg/960/960/14944256-2075098082525148.jpg'
		]
	}),
	new Bag({
		brand: 'Coach',
		name: 'Coach Idol 23 Canvas and Glovetanned Leather Bag',
		price: 550.00,
		info: {
			description: `Coach's classic vein endures in their Idol 23 bag, made in cream canvas with brown glovetanned leather trims. The silhouette itself is compact, slotting easily into the majority of your wardrobe's edits. Gold-tone hardware and the fashion house's signature 'C' plaque neatly conclude the design.`,
			benefits: [
				'Coach Idol 23 bag',
				'Cream canvas, brown leather trims',
				'Chain shoulder strap, designer plaque, gold-tone hardware',
				'Internal zipped compartment',
				'Designer colour: Salt Stone/Burnished Amber'
			],
			features: [
				'Magnetic front flap closure',
				'Dimensions: H: 11cm x W: 22cm x D: 6cm. Strap drop: 17cm.'
			],
			details: [[
				'Range',
				'IDOL'
			], [
				'Brand',
				'Coach'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/15063704-1825127902015985.jpg',
			'https://static.thcdn.com/productimg/960/960/15063704-4035134649027619.jpg',
			'https://static.thcdn.com/productimg/960/960/15063704-3585127626648778.jpg',
			'https://static.thcdn.com/productimg/960/960/15063704-5395127626667528.jpg',
			'https://static.thcdn.com/productimg/960/960/15063704-1775127626690637.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel 1DR XS Leather Shoulder Bag',
		price: 360.00,
		info: {
			description: `Fans of Diesel will instantly recognise this 1DR XS lack shoulder bag by its enamelled D plaque - the detail has adorned everything from the brand's belts to its tops. Made from smooth leather, it has a structured shape with space inside for your lipstick and cards.`,
			benefits: [
				'Diesel 1DR XS shoulder bag',
				'White leather',
				'Top handle, adjustable shoulder strap, logo plaque, white hardware',
				'Internal card slot'
			],
			features: [
				'Snap front flap closure',
				'Dimensions: H: 9.5cm x W: 12.5cm x D: 5cm'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14936048-1855136679373469.jpg',
			'https://static.thcdn.com/productimg/960/960/14936048-6335136679395879.jpg',
			'https://static.thcdn.com/productimg/960/960/14936048-8085136679421778.jpg',
			'https://static.thcdn.com/productimg/960/960/14936048-2145136679453953.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel 1DR Leather Shoulder Bag',
		price: 565.00,
		info: {
			description: `Arguably one of this season's most sought-after accessories, Diesel's 1Dr shoulder bag rightfully claims its place as a coveted on-arm essential. It's made from smooth leather in pastel pink and adorned with the iconic D plaque. Bold yet versatile, it can be carried in-hand or slung over the shoulder.`,
			benefits: [
				'Diesel 1Dr shoulder bag',
				'Pink leather',
				'Top handle, designer plaque, white hardware'
			],
			features: [
				'Snap front flap closure',
				'Dimensions: H: 13.5cm x W: 20.5cm x D: 7cm'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14936046-7135127376657731.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel 1Dr Leather Shoulder Bag',
		price: 305.00,
		info: {
			description: `Arguably one of this season's most sought-after accessories, Diesel's 1Dr shoulder bag rightfully claims its place as a coveted on-arm essential. It's made from smooth leather in a pristine white colourway and adorned with the iconic D plaque. Bold yet versatile, it can be carried in-hand or slung over the shoulder.`,
			benefits: [
				'Diesel 1Dr shoulder bag',
				'White leather',
				'Top handle, designer plaque, silver-tone hardware',
				'Snap front flap closure'
			],
			features: [
				'Dimensions: H: 13.5cm x W: 20.5cm x D: 7cm'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14743317-2505069284987773.jpg',
			'https://static.thcdn.com/productimg/960/960/14743317-1225069285041056.jpg',
			'https://static.thcdn.com/productimg/960/960/14743317-6465069285092143.jpg',
			'https://static.thcdn.com/productimg/960/960/14743317-1405069285150823.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel Play Patent Leather Shoulder Bag',
		price: 179.00,
		info: {
			description: `Sporty and polished, this Play shoulder bag has a curvaceous silhouette and a glossy patent finish. Garnering attention from afar, it's a sleek accent for injecting a bit of Diesel-led fun into your after-dark edits.`,
			benefits: [
				'Diesel Play shoulder bag',
				'Black patent leather',
				'Shoulder strap, designer plaque',
				'Fully lined',
				'Made in Canada'
			],
			features: [
				'Front flap snap closure',
				'Dimensions: H: 12cm x W: 29cm x D: 7cm. Strap drop: 26cm.'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14936049-1245134671009219.jpg',
			'https://static.thcdn.com/productimg/960/960/14936049-3605134671033156.jpg',
			'https://static.thcdn.com/productimg/960/960/14936049-9125134671058389.jpg',
			'https://static.thcdn.com/productimg/960/960/14936049-1455134671088665.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel 1DR Rubberised Leather Bag',
		price: 427.00,
		info: {
			description: `Diesel's 1DR bag has achieved cult status, thanks to its sleek silhouette and metal oval 'D' plaque adorning the flap. Inspired by the '00s, it's crafted from rubberised leather. Inside, you'll find convenient slip pockets that help you keep smaller items neatly organised.`,
			benefits: [
				'Diesel 1DR shoulder bag',
				'Grey rubberised leather',
				'Top handle, designer plaque, grey hardware'
			],
			features: [
				'Snap front flap closure',
				'Dimensions: H: 13.5cm x W: 20.5cm x D: 7cm'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14918230-1995116205688180.jpg',
			'https://static.thcdn.com/productimg/960/960/14918230-1505116202655495.jpg',
			'https://static.thcdn.com/productimg/960/960/14918230-1125116205699007.jpg',
			'https://static.thcdn.com/productimg/960/960/14918230-1225116205713179.jpg',
			'https://static.thcdn.com/productimg/960/960/14918230-5525116205728140.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel Logo Shell Backpack',
		price: 179.00,
		info: {
			description: `Diesel's collections take inspiration from the '90s and '00s. The perfect travel companion, this black backpack is made from shell with pockets for easy access to your essentials and adjustable padded shoulder straps. The brand's signature logo plaque is adorned across the front.`,
			benefits: [
				'Diesel backpack',
				'Black shell',
				'Top handle, adjustable padded shoulder straps, designer plaque, two side pockets, back zipped pocket, silver-tone hardware',
				'Internal pocket, laptop sleeve'
			],
			features: [
				'Front flap and drawstring closures',
				'Dimensions: H: 28cm x W: 27cm x D: 11cm'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14918231-1995116205740488.jpg',
			'https://static.thcdn.com/productimg/960/960/14918231-1445116202670135.jpg',
			'https://static.thcdn.com/productimg/960/960/14918231-2895116205755713.jpg',
			'https://static.thcdn.com/productimg/960/960/14918231-1715116205769318.jpg',
			'https://static.thcdn.com/productimg/960/960/14918231-1585116205788653.jpg'
		]
	}),
	new Bag({
		brand: 'Diesel',
		name: 'Diesel 1DR Embellished Denim Shoulder Bag',
		price: 396.00,
		info: {
			description: `Diesel masters mixed media with this 1DR shoulder bag. Distressed elements take centre stage – the strap's loose threads coupled with rips through the body lend an air of effortless cool. Completing the look is the embellished silver-tone D-plaque on the front flap, setting this bag apart as a '90s icon.`,
			benefits: [
				'Diesel 1DR shoulder bag',
				'Black denim and leather',
				'Shoulder strap, distressed elements, embellished designer plaque',
				'Two internal compartments, internal slip pocket, fully lined',
				'Made in Canada'
			],
			features: [
				'Front flap snap closure',
				'Dimensions: H: 13.5cm x W: 20.5cm x D: 6cm. Strap drop: 16.5cm.'
			],
			details: [[
				'Brand',
				'Diesel'
			]]
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14936044-1015134670900397.jpg',
			'https://static.thcdn.com/productimg/960/960/14936044-1945134670924598.jpg',
			'https://static.thcdn.com/productimg/960/960/14936044-3165134670948706.jpg',
			'https://static.thcdn.com/productimg/960/960/14936044-1005134670980875.jpg'
		]
	}),
	new Bag({
		brand: 'Marc',
		name: 'Marc Jacobs The Slingshot DTM Snapshot Leather Bag',
		price: 325.00,
		info: {
		  description: `Marc Jacob's beloved Slingshot circles back in SS24. The DTM version is strictly monochrome, boasting a cross-grained leather finish with a tonal double J plaque gracing the centre. Pair it with sleek sunglasses and buckled shoes for a cohesive look.`,
		  benefits: [
			'Marc Jacobs The Slingshot DTM bag',
			'White cross-grained leather',
			'Top handle, designer plaque, external slip pocket',
			'Fully lined'
		  ],
		  features: [
			'Dual zip closure',
			'Dimensions: H: 11cm x W: 22cm x D: 7cm. Strap drop: 15cm.'
		  ],
		  details: [[
			'Brand',
			'Marc Jacobs'
		  ]],
		},
		images: [
			'https://static.thcdn.com/productimg/960/960/14939761-8155103523364658.jpg',
			'https://static.thcdn.com/productimg/960/960/14939761-2045103523420365.jpg',
			'https://static.thcdn.com/productimg/960/960/14939761-1045103523476036.jpg',
			'https://static.thcdn.com/productimg/960/960/14939761-1705103523536576.jpg',
			'https://static.thcdn.com/productimg/960/960/14939761-2475103523589124.jpg'
		  ]
	  })

];

export default newBags;