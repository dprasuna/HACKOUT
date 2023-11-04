function showInfo() {
    let stateName = document.getElementById('stateDropdown').value;
    let stateInfo = document.getElementById('StateInfo');
    let stateHeader = document.getElementById('StateName');
    let mapSrc = "";

    if (stateName === "AndhraPradesh") {
        stateHeader.innerHTML = "Andhra Pradesh";
        stateInfo.innerHTML = "Capital: Amaravati<br>Popular Destinations: Visakhapatnam, Tirupati, Hyderabad<br>Highlights: Rich cultural heritage, beautiful beaches, and historic temples.<br>";
        mapSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7867850.134972459!2d70.62623467206286!3d15.65969501965983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3546f8ae93d47f%3A0x33d1bbbe95adcd83!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1695909564312!5m2!1sen!2sin";
    } else if (stateName === "ArunachalPradesh") {
        stateHeader.innerHTML = "Arunachal Pradesh";
        stateInfo.innerHTML = "Capital: Itanagar<br>Popular Destinations: Tawang, Ziro, Bomdila<br>Highlights: Stunning landscapes, Buddhist monasteries, and tribal culture.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607630.5645786254!2d91.8379009601589!3d27.991548980173395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374043466a1c7227%3A0x76b56e552f9a92f2!2sArunachal%20Pradesh!5e0!3m2!1sen!2sin!4v1695909422269!5m2!1sen!2sin";
    } else if (stateName === "Assam") {
        stateHeader.innerHTML = "Assam";
        stateInfo.innerHTML = "Capital: Dispur<br>Popular Destinations: Guwahati, Kaziranga National Park, Majuli Island<br>Highlights: Tea gardens, wildlife, and the Brahmaputra River.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671157.9880743534!2d90.21715905430949!3d26.0297857415393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374516c94c312d63%3A0xd11a73bb736719fb!2sAssam!5e0!3m2!1sen!2sin!4v1695909512291!5m2!1sen!2sin";
    } else if (stateName === "Bihar") {
        stateHeader.innerHTML = "Bihar";
        stateInfo.innerHTML = "Capital: Patna<br>Popular Destinations: Bodh Gaya, Nalanda, Rajgir<br>Highlights: Historical sites, religious significance, and ancient ruins.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837636.848484216!2d84.4876056223567!3d25.89794964907475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e0!3m2!1sen!2sin!4v1695909636830!5m2!1sen!2sin";
    } else if (stateName === "Chhattisgarh") {
        stateHeader.innerHTML = "Chhattisgarh";
        stateInfo.innerHTML = "Capital: Raipur<br>Popular Destinations: Bastar, Raipur, Chitrakoot Falls<br>Highlights: Tribal culture, lush forests, and waterfalls.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816151.484138829!2d79.6785693136439!3d20.92396650745047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a261f16c67a8bad%3A0x5c23f412fb179d95!2sChhattisgarh!5e0!3m2!1sen!2sin!4v1695909664420!5m2!1sen!2sin";
    } else if (stateName === "Goa") {
        stateHeader.innerHTML = "Goa";
        stateInfo.innerHTML = "Capital: Panaji<br>Popular Destinations: Goa Beaches, Old Goa, Dudhsagar Falls<br>Highlights: Beach parties, vibrant nightlife, and Portuguese architecture.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492479.7588158506!2d73.67703680015427!3d15.349486364827893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1695909693296!5m2!1sen!2sin";
    } else if (stateName === "Gujarat") {
        stateHeader.innerHTML = "Gujarat";
        stateInfo.innerHTML = "Capital: Gandhinagar<br>Popular Destinations: Ahmedabad, Rann of Kutch, Gir Forest<br>Highlights: Historical sites, wildlife, and colorful festivals.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777452.778325119!2d68.68564399342966!3d22.394421037876434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1695909718829!5m2!1sen!2sin";
    } else if (stateName === "Haryana") {
        stateHeader.innerHTML = "Haryana";
        stateInfo.innerHTML = "Capital: Chandigarh<br>Popular Destinations: Gurgaon, Faridabad, Kurukshetra<br>Highlights: Industrial hubs, religious sites, and modern infrastructure.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566502.529965879!2d71.02302950712865!3d29.196699179584108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x732eaab4aaa6c143!2sHaryana!5e0!3m2!1sen!2sin!4v1695909747753!5m2!1sen!2sin";
    } else if (stateName === "HimachalPradesh") {
        stateHeader.innerHTML = "Himachal Pradesh";
        stateInfo.innerHTML = "Capital: Shimla<br>Popular Destinations: Manali, Shimla, Dharamshala<br>Highlights: Snow-capped mountains, adventure sports, and Tibetan culture.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735960.39470769!2d75.98243983494193!3d31.8100760416213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1695909776862!5m2!1sen!2sin";
    } else if (stateName === "Jharkhand") {
        stateHeader.innerHTML = "Jharkhand";
        stateInfo.innerHTML = "Capital: Ranchi<br>Popular Destinations: Dhanbad, Jamshedpur, Ranchi<br>Highlights: Natural beauty, tribal heritage, and mining industries.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871161.2249835026!2d84.32665707428131!3d23.65407075571634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b2386df480857%3A0x62c5b809eee29004!2sJharkhand!5e0!3m2!1sen!2sin!4v1695909829510!5m2!1sen!2sin";
    } else if (stateName === "Karnataka") {
        stateHeader.innerHTML = "Karnataka";
        stateInfo.innerHTML = "Capital: Bengaluru<br>Popular Destinations: Bangalore, Mysore, Hampi<br>Highlights: Technology hub, historic architecture, and lush landscapes.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945976.5510434057!2d73.67911721965847!3d15.020838795844677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x41f1d28cd1757cd5!2sKarnataka!5e0!3m2!1sen!2sin!4v1695909852251!5m2!1sen!2sin";
    } else if (stateName === "Kerala") {
        stateHeader.innerHTML = "Kerala";
        stateInfo.innerHTML = "Capital: Thiruvananthapuram<br>Popular Destinations: Kochi, Munnar, Alleppey<br>Highlights: Backwaters, Ayurveda, and diverse cuisine.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016726.9856363!2d73.49646403302035!3d10.533320067045603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1695909876744!5m2!1sen!2sin";
    } else if (stateName === "MadhyaPradesh") {
        stateHeader.innerHTML = "Madhya Pradesh";
        stateInfo.innerHTML = "Capital: Bhopal<br>Popular Destinations: Khajuraho, Bhopal, Gwalior<br>Highlights: UNESCO World Heritage Sites, wildlife, and palaces.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7485522.272906506!2d68.3066248001639!3d23.63873232717448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39667381d35aea05%3A0xe0106b0d4e701c1e!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1695909908532!5m2!1sen!2sin";
    } else if (stateName === "Maharashtra") {
        stateHeader.innerHTML = "Maharashtra";
        stateInfo.innerHTML = "Capital: Mumbai<br>Popular Destinations: Mumbai, Pune, Lonavala<br>Highlights: Bollywood, historic sites, and vibrant cities.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867615.068197029!2d74.12829511717395!3d18.79958650972747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1695909935408!5m2!1sen!2sin";
    } else if (stateName === "Manipur") {
        stateHeader.innerHTML = "Manipur";
        stateInfo.innerHTML = "Capital: Imphal<br>Popular Destinations: Imphal, Loktak Lake, Ukhrul<br>Highlights: Scenic landscapes, indigenous culture, and historic sites.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927489.0780575573!2d93.19761637504445!3d24.76104475319703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3749265bf16390db%3A0x8cc1691ae0a829af!2sManipur!5e0!3m2!1sen!2sin!4v1695909955430!5m2!1sen!2sin";
    } else if (stateName === "Meghalaya") {
        stateHeader.innerHTML = "Meghalaya";
        stateInfo.innerHTML = "Capital: Shillong<br>Popular Destinations: Shillong, Cherrapunji, Jowai<br>Highlights: Abundant rainforests, living root bridges, and waterfalls.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842747.6915932545!2d89.9918941325351!3d25.567787747745644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd207f%3A0xf5ef6117f496d6e!2sMeghalaya!5e0!3m2!1sen!2sin!4v1695909990530!5m2!1sen!2sin";
    } else if (stateName === "Mizoram") {
        stateHeader.innerHTML = "Mizoram";
        stateInfo.innerHTML = "Capital: Aizawl<br>Popular Destinations: Aizawl, Champhai, Lunglei<br>Highlights: Picturesque landscapes, indigenous tribes, and vibrant festivals.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877237.174255242!2d91.52794207972619!3d23.225655563738215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d0bd19f3f36f7%3A0xb1f62692a3d5e474!2sMizoram!5e0!3m2!1sen!2sin!4v1695910016405!5m2!1sen!2sin";
    } else if (stateName === "Nagaland") {
        stateHeader.innerHTML = "Nagaland";
        stateInfo.innerHTML = "Capital: Kohima<br>Popular Destinations: Kohima, Dimapur, Hornbill Festival<br>Highlights: Rich tribal culture, scenic hills, and unique festivals.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917119.6409363488!2d93.62458557233192!3d26.115281327358893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746210934c63d31%3A0x1f2df33a89cc3efd!2sNagaland!5e0!3m2!1sen!2sin!4v1695910038169!5m2!1sen!2sin";
    } else if (stateName === "Odisha") {
        stateHeader.innerHTML = "Odisha";
        stateInfo.innerHTML = "Capital: Bhubaneswar<br>Popular Destinations: Puri, Bhubaneswar, Konark<br>Highlights: Temples, pristine beaches, and vibrant culture.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835014.4964761436!2d81.79579223543102!3d20.170256059612615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2sOdisha!5e0!3m2!1sen!2sin!4v1695910134296!5m2!1sen!2sin";
    } else if (stateName === "Punjab") {
        stateHeader.innerHTML = "Punjab";
        stateInfo.innerHTML = "Capital: Chandigarh<br>Popular Destinations: Amritsar, Chandigarh, Ludhiana<br>Highlights: Sikh heritage, delicious cuisine, and modern cities.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750640.8742660831!2d74.09169366147357!3d31.020106886819505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1695910159023!5m2!1sen!2sin";
    } else if (stateName === "Rajasthan") {
        stateHeader.innerHTML = "Rajasthan";
        stateInfo.innerHTML = "Capital: Jaipur<br>Popular Destinations: Jaipur, Udaipur, Jodhpur<br>Highlights: Palaces, forts, and the Thar Desert.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653004.4150819057!2d71.2372979629758!3d26.60403536736035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1695910182078!5m2!1sen!2sin";
    } else if (stateName === "Sikkim") {
        stateHeader.innerHTML = "Sikkim";
        stateInfo.innerHTML = "Capital: Gangtok<br>Popular Destinations: Gangtok, Pelling, Tsomgo Lake<br>Highlights: Himalayan beauty, monasteries, and adventure sports.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905185.7815714993!2d87.80737385108229!3d27.59718901459123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1695910222077!5m2!1sen!2sin";
    } else if (stateName === "TamilNadu") {
        stateHeader.innerHTML = "Tamil Nadu";
        stateInfo.innerHTML = "Capital: Chennai<br>Popular Destinations: Chennai, Coimbatore, Madurai<br>Highlights: Temples, classical arts, and South Indian cuisine.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013074.391646972!2d75.64787110491778!3d10.809936039730772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1695910244859!5m2!1sen!2sin";
    } else if (stateName === "Telangana") {
        stateHeader.innerHTML = "Telangana";
        stateInfo.innerHTML = "Capital: Hyderabad<br>Popular Destinations: Hyderabad, Warangal, Charminar<br>Highlights: Hi-tech city, historic landmarks, and biryani.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888715.289833625!2d76.63760838520906!3d17.858616419762516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3350db9429ed43%3A0x63ef7ba741594059!2sTelangana!5e0!3m2!1sen!2sin!4v1695910269465!5m2!1sen!2sin";
    } else if (stateName === "Tripura") {
        stateHeader.innerHTML = "Tripura";
        stateInfo.innerHTML = "Capital: Agartala<br>Popular Destinations: Agartala, Udaipur, Neermahal Palace<br>Highlights: Cultural diversity, palaces, and natural beauty.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935013.4269213806!2d91.08143100906003!3d23.733246952378675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753b566f6c1a285%3A0x14dd7ae7453fff74!2sTripura!5e0!3m2!1sen!2sin!4v1695910307435!5m2!1sen!2sin";
    } else if (stateName === "UttarPradesh") {
        stateHeader.innerHTML = "Uttar Pradesh";
        stateInfo.innerHTML = "Capital: Lucknow<br>Popular Destinations: Agra, Varanasi, Lucknow<br>Highlights: Taj Mahal, holy ghats, and rich history.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636592.1356717786!2d78.21830498393643!3d27.11348432901307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695910335589!5m2!1sen!2sin";
    } else if (stateName === "Uttarakhand") {
        stateHeader.innerHTML = "Uttarakhand";
        stateInfo.innerHTML = "Capital: Dehradun<br>Popular Destinations: Rishikesh, Mussoorie, Haridwar<br>Highlights: Himalayan landscapes, yoga, and spiritual retreats.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767600.1115640665!2d77.98940789494776!3d30.084333811211078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909dcc202279c09%3A0x7c43b63689cc005!2sUttarakhand!5e0!3m2!1sen!2sin!4v1695910376509!5m2!1sen!2sin";
    } else if (stateName === "WestBengal") {
        stateHeader.innerHTML = "West Bengal";
        stateInfo.innerHTML = "Capital: Kolkata<br>Popular Destinations: Kolkata, Darjeeling, Sundarbans<br>Highlights: Cultural heritage, tea gardens, and wildlife.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722101.8950700224!2d85.20993972354248!3d24.35119024317483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa16ff1397e887%3A0x71543a3dc3e7a20a!2sWest%20Bengal!5e0!3m2!1sen!2sin!4v1695910399242!5m2!1sen!2sin";
    } else if (stateName === "JammuKashmir") {
        stateHeader.innerHTML = "Jammu and Kashmir";
        stateInfo.innerHTML = "Capital: Srinagar (Summer), Jammu (Winter)<br>Popular Destinations: Srinagar, Gulmarg, Leh-Ladakh<br>Highlights: Himalayan beauty, houseboats, and adventure tourism.<br>";
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702967.4873686908!2d73.94567267207285!3d33.52456785133385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1695910437155!5m2!1sen!2sin";
    } else {
        stateHeader.innerHTML = "Select from the dropdown above to learn about each state.";
        stateInfo.innerHTML = "";
        mapSrc ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283599.358027074!2d72.10082996269149!3d20.73670481863216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1695908969980!5m2!1sen!2sin"
    }
    document.getElementById('MapPlace').src = mapSrc;
}