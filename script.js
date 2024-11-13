document.addEventListener("DOMContentLoaded", () => {
    const mapObject = document.getElementById("map");

    mapObject.addEventListener("load", () => {
        const svgDoc = mapObject.contentDocument;
        const paths = svgDoc.querySelectorAll("path");

        paths.forEach(path => {
            path.addEventListener("click", function() {
                const districtName = this.getAttribute("inkscape:label");
                const detailsDiv = document.getElementById("details");

                if (districtName === 'Jaipur') {
                    detailsDiv.innerHTML = `
                        <h2>Jaipur</h2>
                        <h3>1. Art and Craft</h3>
                        <p>
                            Jaipur, the capital of Rajasthan, is renowned for its rich tradition of art and craft. 
                            The city, often referred to as the "Pink City," has a long history of nurturing various 
                            forms of craftsmanship. Here are some of the prominent art and craft forms of Jaipur:
                        </p>
                        <ul>
                            <li><b>Block Printing:</b> Jaipur is famous for its intricate block printing techniques. 
                                Artisans use hand-carved wooden blocks to create vibrant patterns on fabrics, often featuring traditional motifs.</li>
                            <li><b>Blue Pottery:</b> Known for its distinctive blue hues, Jaipur's blue pottery is made from a unique clay 
                                and is often adorned with intricate designs inspired by Persian art.</li>
                            <li><b>Gemstone Crafting:</b> The city is renowned for its gemstone cutting and polishing, 
                                producing beautiful jewelry that showcases local semi-precious stones.</li>
                            <li><b>Jaipur Rugs:</b> Handwoven rugs from Jaipur are known for their intricate designs 
                                and craftsmanship, often featuring traditional patterns and vibrant colors.</li>
                            <li><b>Enamel Work (Minakari):</b> This technique involves decorating metal surfaces 
                                with colorful enamel, creating stunning jewelry and decorative items.</li>
                        </ul>
                        
                        <h3>2. Culture</h3>
                        <p>
                            The culture of Jaipur is a vibrant blend of royal heritage, artistic traditions, and rich customs. 
                            Known as the "Pink City," Jaipur’s culture reflects the grandeur of its royal past and the colorful lifestyle 
                            of the Rajasthani people. Here’s a look into key aspects of Jaipur's culture:
                        </p>
                        <ul>
                            <li><b>Architecture and Art:</b> Jaipur’s architecture blends Rajput, Mughal, and European styles, 
                                evident in grand structures like the City Palace, Amber Fort, and Hawa Mahal.</li>
                            <li><b>Festivals:</b> Key festivals include Teej, Gangaur, Diwali, and the Elephant Festival. 
                                The Jaipur Literature Festival also brings global thinkers to the city.</li>
                            <li><b>Bazaars and Shopping:</b> Jaipur’s markets, like Johari Bazaar and Bapu Bazaar, are famous for 
                                jewelry, textiles, and handicrafts.</li>
                            <li><b>Religious and Spiritual Practices:</b> Temples like Govind Dev Ji and Birla Mandir play a 
                                significant role in Jaipur’s spiritual life.</li>
                            <li><b>Royal Heritage:</b> The royal family resides in the City Palace and influences many cultural events.</li>
                        </ul>

                        <h3>3. Heritage</h3>
                        <p>
                            Jaipur is deeply rooted in its heritage, with a legacy that reflects the grandeur of Rajput architecture, arts, and traditions. 
                            Key elements of Jaipur’s heritage include:
                        </p>
                        <ul>
                            <li><b>Architectural Heritage:</b> Jaipur was the first planned city in India, designed by Vidyadhar Bhattacharya 
                                under Maharaja Sawai Jai Singh II. Iconic monuments include Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, and Jal Mahal.</li>
                            <li><b>Royal Heritage:</b> Influenced by the Kachwaha dynasty, with key sites like Nahargarh Fort and City Palace.</li>
                            <li><b>Cultural Heritage:</b> Known for its handicrafts like block printing, blue pottery, and miniature paintings.</li>
                            <li><b>Religious Heritage:</b> Key temples include Govind Dev Ji Temple, Moti Doongri Ganesh Temple, and Birla Mandir.</li>
                            <li><b>Culinary Heritage:</b> Traditional dishes include Dal Baati Churma, Laal Maas, Gatte ki Sabzi, Ghewar, and Feeni.</li>
                        </ul>
                    `;
                } 
                else if (districtName === 'Udaipur') {
                    detailsDiv.innerHTML = `
                        <h2>Udaipur</h2>
                        <p>Udaipur also known as the "City of Lakes" is a major city, municipal corporation and the administrative headquarters of the Udaipur district in the Indian state of Rajasthan. It is the historic capital of the kingdom of Mewar in the former Rajputana Agency. It was founded in 1559 by Maharana Udai Singh II of the Sisodia clan of Rajput, when he shifted his capital from the city of Chittorgarh to Udaipur after Chittorgarh was besieged by Akbar. </p>
                        <h3>1. Art and Craft</h3>
                        <ul>
                            <li><b>Pichwai Paintings:</b> Intricate paintings depicting scenes of Krishna and Radha, created on fabric with vibrant colors and detailed designs.</li>
                            <li><b>Mewar Carpets:</b> Hand-knotted carpets featuring traditional patterns and designs inspired by the natural beauty of the region.</li>
                            <li><b>Woodwork:</b> Skilled artisans produce intricately carved wooden furniture and decorative items, showcasing traditional Rajasthani motifs.</li>
                            <li><b>Gond Art:</b> Tribal art known for its vibrant colors and intricate patterns, often depicting nature and folklore.</li>
                            <li><b>Silver Jewelry:</b> Famous for traditional silver jewelry, often embellished with semi-precious stones and intricate designs.</li>
                        </ul>
        
                        <h3>2. Culture</h3>
                        <p>The culture of Udaipur is a blend of traditional and modern influences, shaped by its Rajput heritage. Festivals and fairs are an important part of life, including:</p>
                        <ul>
                            <li><b>Mewar Festival:</b> Celebrates spring with processions, dance, and cultural events.</li>
                            <li><b>Folk Music and Dance:</b> Includes traditional forms like Ghoomar, Kalbeliya, and Bhavai, reflecting the vibrant local culture.</li>
                        </ul>
        
                        <h3>3. Heritage</h3>
                        <ul>
                            <li><b>City Palace Complex:</b> A stunning example of Rajput, Mughal, and European architectural styles, built over 400 years.</li>
                            <li><b>Lake Pichola:</b> Surrounded by palaces and temples, with the famous Lake Palace and Jagmandir Palace on islands.</li>
                            <li><b>Sajjangarh Palace (Monsoon Palace):</b> Built by Maharana Sajjan Singh, offering panoramic views from its hilltop perch.</li>
                            <li><b>Ranakpur Temple:</b> Known for its intricate marble carvings and numerous pillars, it is a key Jain temple near Udaipur.</li>
                        </ul>
                    `;
                }else {
                    detailsDiv.innerHTML = `
                        <h2>${districtName}</h2>
                        <p>Details about ${districtName} will be added here.</p>
                    `;
                }
            });
        });
    });
});

document.getElementById("hamburgerBtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "250px";
});

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}
