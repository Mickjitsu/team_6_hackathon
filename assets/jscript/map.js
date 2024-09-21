document.addEventListener('DOMContentLoaded', function() {
    
    let artistBirth = document.getElementById('artist-birth');
    let artistDeath = document.getElementById('artist-death');
    let artistFrom = document.getElementById('artist-from');
    let extraInfo = document.querySelector('.extra-information');
    let lifeHistory = document.querySelector('.life-history');
    let personalHistory = document.querySelector('.personal-paragraph');
    let musicalInfluence = document.querySelector('.musican-influence');

    const list_names = [
    document.getElementById('johan'),
    document.getElementById('beethoven'),
    document.getElementById('mozart'),
    document.getElementById('chopin'),
    document.getElementById('pyotr'),
    document.getElementById('wagner'),
    document.getElementById('debussy'),
    document.getElementById('igor'),
    document.getElementById('brahns'),
    document.getElementById('mahler')
    ]
    /*Composers information object - listing here to ensure that it works if ran locally */
const composers = [
    {
        "name": "Johann Sebastian Bach",
        "place_of_birth": "Eisenach, Germany",
        "date_of_birth": "31-03-1685",
        "date_of_death": "28-07-1750",
        "coordinates": [50.9744, 10.3236],
        "personal_history_summary": "Bach was born into a prominent musical family; his father was a musician and taught him the violin and harpsichord. After the death of his parents, he was raised by his older brother, who introduced him to the world of music. Bach held various positions as an organist and composer in several German cities, including Arnstadt, Mühlhausen, and Leipzig. He had a large family and faced personal challenges, including the loss of many children. Despite these hardships, he remained dedicated to his craft, producing a vast oeuvre that includes sacred and secular music.",
        "musical_influence_summary": "Bach's music is characterized by its intricate counterpoint and deep emotional resonance. His compositions, such as the 'Brandenburg Concertos' and 'Mass in B Minor,' showcase his mastery of form and harmony. Bach's work laid the groundwork for future composers, influencing the development of the sonata, concerto, and orchestral suite. His exploration of musical motifs and structural innovations continues to resonate, making him a pivotal figure in the transition from the Baroque to the Classical period."
    },
    {
        "name": "Ludwig van Beethoven",
        "place_of_birth": "Bonn, Germany",
        "date_of_birth": "17-12-1770",
        "date_of_death": "26-03-1827",
        "coordinates": [50.7374, 7.0982],
        "personal_history_summary": "Beethoven was the second of three children in a family of musicians. His father, a court musician, recognized his son's talent early and pushed him into music. After studying with various teachers, he moved to Vienna to pursue his career. Beethoven faced significant personal challenges, including the onset of deafness, which began in his late 20s. Despite this, he continued to compose, creating some of the most iconic works in Western music, such as his symphonies and piano sonatas. His life was marked by struggle and resilience, reflecting the Romantic ideals of individualism.",
        "musical_influence_summary": "Beethoven is known for expanding the scope of symphonic and sonata form, and for his innovative approach to harmony and rhythm. His compositions, such as the 'Eroica' Symphony and the 'Moonlight' Sonata, display emotional depth and complexity. He transformed the symphony into a vehicle for personal expression, paving the way for future composers to explore emotional and thematic depth in their works. His legacy includes bridging the gap between the Classical and Romantic periods, influencing generations of musicians."
    },
    {
        "name": "Wolfgang Amadeus Mozart",
        "place_of_birth": "Salzburg, Austria",
        "date_of_birth": "27-01-1756",
        "date_of_death": "05-12-1791",
        "coordinates": [47.7980, 13.0439],
        "personal_history_summary": "Mozart was a musical prodigy, performing before European royalty by the age of six. He received extensive musical training from his father, Leopold, who was also a composer. Despite his early success, Mozart struggled financially as an adult, facing challenges with patronage and finding stable employment. He moved to Vienna, where he became a freelance composer, gaining recognition for his operas, symphonies, and chamber works. His personal life was tumultuous, with several family losses and issues in his marriage, which influenced his music.",
        "musical_influence_summary": "Mozart's work is celebrated for its melodic beauty, clarity of form, and emotional depth. He mastered a wide range of genres, including opera, symphony, and chamber music, with masterpieces like 'The Magic Flute' and 'Eine kleine Nachtmusik.' His innovative use of harmony and orchestration set new standards for composers, influencing the development of Classical music. Mozart's ability to convey complex emotions and character through music established him as a central figure in Western art music."
    },
    {
        "name": "Frédéric Chopin",
        "place_of_birth": "Żelazowa Wola, Poland",
        "date_of_birth": "01-03-1810",
        "date_of_death": "17-10-1849",
        "coordinates": [52.4095, 16.9349],
        "personal_history_summary": "Chopin was born to a French father and a Polish mother, and his early education in music was shaped by his cultural background. He showed exceptional talent as a pianist and composer, and his works often reflect Polish folk themes. Chopin moved to Paris at the age of 20, where he became a part of the vibrant artistic community and gained fame as a composer and piano teacher. His health deteriorated in later years, leading to his early death at 39. Chopin’s music is deeply personal, often reflecting his experiences and emotions.",
        "musical_influence_summary": "Chopin's compositions are renowned for their lyrical melodies and innovative use of harmony. He transformed the piano repertoire with his nocturnes, études, and polonaises, emphasizing expressive playing and technical virtuosity. His unique style incorporated elements of Polish folk music, influencing future generations of composers. Chopin's focus on the piano as a solo instrument and his emotional expressiveness set a new standard in Romantic music, making him a key figure in the history of Western music."
    },
    {
        "name": "Pyotr Ilyich Tchaikovsky",
        "place_of_birth": "Votkinsk, Russia",
        "date_of_birth": "07-05-1840",
        "date_of_death": "06-11-1893",
        "coordinates": [57.0485, 53.9871],
        "personal_history_summary": "Tchaikovsky was the second of six children in a middle-class family. He began studying music at a young age and eventually attended the Saint Petersburg Conservatory. Despite his success, Tchaikovsky struggled with his personal identity and often dealt with feelings of isolation and depression. He became known for his ballets, such as 'Swan Lake' and 'The Nutcracker,' and his symphonies. His life experiences heavily influenced his music, often reflecting a deep emotional complexity.",
        "musical_influence_summary": "Tchaikovsky's music is characterized by its emotional intensity and innovative orchestration. He brought Russian music to the forefront of classical composition, blending Western and folk traditions. His ability to convey deep emotions through melody and harmony left a lasting impact on the Romantic repertoire. Tchaikovsky’s ballets and symphonies continue to be celebrated for their dramatic and lyrical qualities, influencing composers across various genres."
    },
    {
        "name": "Richard Wagner",
        "place_of_birth": "Leipzig, Germany",
        "date_of_birth": "22-05-1813",
        "date_of_death": "13-02-1883",
        "coordinates": [51.4965, 7.4641],
        "personal_history_summary": "Wagner was born into a theatrical family and developed a passion for music and drama early on. He faced significant challenges in his early career, including financial difficulties and political exile due to his revolutionary activities. Wagner's works are characterized by their dramatic intensity and use of leitmotifs, musical themes associated with specific characters or ideas. He built the Bayreuth Festspielhaus, a theater specifically for his works, which became a pilgrimage site for opera lovers.",
        "musical_influence_summary": "Wagner revolutionized opera with his concept of the Gesamtkunstwerk, or total artwork, integrating music, poetry, and visual arts. His operas, such as 'The Ring Cycle' and 'Tristan und Isolde,' pushed the boundaries of musical structure and harmony. Wagner's influence extended beyond music, impacting literature, philosophy, and the arts, and his legacy continues to shape the world of opera and orchestral music."
    },
    {
        "name": "Claude Debussy",
        "place_of_birth": "Saint-Germain-en-Laye, France",
        "date_of_birth": "22-08-1862",
        "date_of_death": "25-03-1918",
        "coordinates": [48.8584, 2.2945],
        "personal_history_summary": "Debussy was the son of a shopkeeper and a seamstress and began piano lessons at a young age. He studied at the Paris Conservatory, where he was exposed to various musical styles. Debussy's life was marked by personal struggles, including tumultuous relationships and financial instability. His music reflects the aesthetic movements of his time, often incorporating elements of Impressionism and symbolism, which influenced his unique harmonic language and approach to structure.",
        "musical_influence_summary": "Debussy's work marked a departure from traditional tonality and form, embracing innovative harmonies and textures. His compositions, such as 'Clair de Lune' and 'La Mer,' evoke atmospheres and emotions rather than strict narratives. Debussy's exploration of timbre and color in music paved the way for future composers, influencing genres beyond classical music, including jazz and film scores."
    },
    {
        "name": "Igor Stravinsky",
        "place_of_birth": "Lomonosov, Russia",
        "date_of_birth": "17-06-1882",
        "date_of_death": "06-04-1971",
        "coordinates": [59.9343, 30.3351],
        "personal_history_summary": "Stravinsky was born into a musical family and showed exceptional talent early on. He studied music theory and composition, eventually gaining recognition for his ballets, which were groundbreaking in their use of rhythm and orchestration. His life was marked by significant historical events, including two World Wars, which influenced his music. Stravinsky's career spanned various musical styles, from Russian folk elements to neoclassicism and serialism.",
        "musical_influence_summary": "Stravinsky's compositions, particularly 'The Firebird' and 'The Rite of Spring,' revolutionized 20th-century music with their innovative rhythms and orchestration. He introduced complex rhythms and new forms of musical expression that challenged traditional norms. Stravinsky's impact on modern music extends across genres, influencing composers in classical, jazz, and popular music."
    },
    {
        "name": "Johannes Brahms",
        "place_of_birth": "Hamburg, Germany",
        "date_of_birth": "07-05-1833",
        "date_of_death": "03-04-1897",
        "coordinates": [53.5511, 9.9937],
        "personal_history_summary": "Brahms grew up in a poor family, with a father who played the double bass and a mother who was a skilled musician. He faced early hardships but developed a deep love for music, which guided him throughout his life. Brahms initially struggled to gain recognition, but he eventually became a central figure in the Romantic movement, admired for his symphonies and chamber music. He was known for his meticulousness and dedication to craftsmanship, often revising his works multiple times.",
        "musical_influence_summary": "Brahms blended traditional forms with rich harmonic language, drawing on the influences of Bach and Beethoven. His compositions, such as the 'Symphony No. 1' and 'German Requiem,' reflect both emotional depth and structural rigor. Brahms' commitment to the symphonic form influenced later composers, establishing him as a key figure in the development of late Romantic music."
    },
    {
        "name": "Gustav Mahler",
        "place_of_birth": "Kaliště, Czech Republic",
        "date_of_birth": "07-07-1860",
        "date_of_death": "18-05-1911",
        "coordinates": [49.4478, 15.2283],
        "personal_history_summary": "Mahler was born into a Jewish family and faced cultural and societal challenges throughout his life. He began his career as a conductor and quickly gained a reputation for his interpretations of other composers' works. Mahler's own compositions are characterized by their large scale and intricate orchestration. His personal struggles, including the loss of loved ones and existential concerns, deeply influenced his music.",
        "musical_influence_summary": "Mahler's expansive symphonic forms and innovative orchestration significantly influenced 20th-century composers. His works, such as 'Symphony No. 2' and 'Das Lied von der Erde,' explore profound themes of life, death, and human experience. Mahler's ability to blend folk elements with grand orchestral textures paved the way for new approaches in symphonic writing, and his emotional depth resonates with audiences to this day."
    }
]

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    composers.forEach(composer => {
        const marker = L.marker(composer.coordinates).addTo(map)
            .bindPopup(`
                This is ${composer.place_of_birth}. The birth place of ${composer.name}. 
                <br> Click on their name to find out more!
                <br> <button class="info-button" data-name="${composer.name}">Click here for more information</button>
            `);

            marker.on('popupopen', function() {

                const infoButton = document.querySelector('.info-button[data-name="' + composer.name + '"]');
    
                if (infoButton) {
    
                    const newButton = infoButton.cloneNode(true);
                    infoButton.parentNode.replaceChild(newButton, infoButton);
    
                    newButton.addEventListener('click', function() {
                        handleMarkerClick(composer);
                    });
                }
        });
    });

    function handleMarkerClick(content) {
        console.log(content);
        extraInfo.classList.remove('hidden')
        lifeHistory.classList.remove('hidden')
        personalHistory.textContent = content.personal_history_summary
        musicalInfluence.textContent = content.musical_influence_summary
    }

    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const clickedName = item.textContent.trim();
            
            composers.forEach(composer => {
                if (composer.name.includes(clickedName)) {
                    console.log(clickedName)
                    // Perform your action here for the clicked composer
                    console.log(composer.coordinates)
                    map.flyTo(composer.coordinates)
                }
            });
        });
    });
});