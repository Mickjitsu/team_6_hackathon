document.addEventListener('DOMContentLoaded', function () {
  let artistBirth = document.getElementById('artist-birth');
  let artistDeath = document.getElementById('artist-death');
  let artistFrom = document.getElementById('artist-from');
  let artistName = document.getElementById('artist-name');
  let artistBirthSm = document.getElementById('artist-birth-sm');
  let artistDeathSm = document.getElementById('artist-death-sm');
  let artistFromSm = document.getElementById('artist-from-sm');
  let artistNameSm = document.getElementById('artist-name-sm');
  let extraInfo = document.querySelector('.extra-information');
  let extraInfoStyling = document.querySelector('.extra-information-styling');
  let lifeHistory = document.querySelector('.life-history');
  let composerSmall = document.querySelector('.composer-small');
  let personalHistory = document.querySelector('.personal-paragraph');
  let musicalInfluence = document.querySelector('.musical-influence');
  let artistImage = document.querySelector('.historical-image');
  let artistImageSm = document.querySelector('.historical-image-sm');
  let youtubeHeading = document.querySelector('.youtube');
  let youtubeVideo = document.querySelector('.youtube-video');

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
    document.getElementById('mahler'),
  ];
  /*Composers information object - listing here to ensure that it works if ran locally */
  const composers = [
    {
      name: 'Johann Sebastian Bach',
      place_of_birth: 'Eisenach, Germany',
      date_of_birth: '31-03-1685',
      date_of_death: '28-07-1750',
      coordinates: [50.9744, 10.3236],
      personal_history_summary:
        "Johann Sebastian Bach was born into a family deeply rooted in music. His father, Johann Ambrosius, was a musician, and several of his ancestors had been church organists and town musicians. After his parents' early deaths, Bach was raised by his older brother, who furthered his musical education. Throughout his career, Bach held various organist and kapellmeister positions in Germany. He married twice and had 20 children, though only ten survived into adulthood. His personal life was marked by devotion to his work and family, and his deeply religious nature influenced much of his music. Despite facing periods of professional difficulty and personal loss, Bach remained prolific until his death in 1750.",
      musical_influence_summary:
        "Bach is renowned for his mastery of counterpoint, complex harmonic structures, and innovative use of forms. His works, like the Brandenburg Concertos and The Well-Tempered Clavier, became foundational in Western classical music. His compositions spanned church music, instrumental suites, concertos, and secular vocal music, and he had a significant impact on later composers like Beethoven, Brahms, and Mendelssohn. Bach's deep religious faith and innovative techniques have secured his legacy as one of the greatest composers in Western music.",
      image_url: './assets/images/composers/bachpng.webp',
      youtube_url:
        'https://www.youtube.com/embed/6JQm5aSjX6g?si=WkBx53m_XxsmuPJY',
    },
    {
      name: 'Ludwig van Beethoven',
      place_of_birth: 'Bonn, Germany',
      date_of_birth: '17-12-1770',
      date_of_death: '26-03-1827',
      coordinates: [50.7374, 7.0982],
      personal_history_summary:
        "Born on December 17, 1770, in Bonn, Germany, Beethoven came from a family of court musicians. His father, Johann van Beethoven, recognized his son's talent early but pushed him to the point of cruelty in his pursuit of perfection. After moving to Vienna at age 21, Beethoven studied under Haydn and became an acclaimed composer and pianist. He faced many personal struggles, most notably the gradual loss of his hearing, which began in his late twenties. Despite this, he composed some of his most important works while nearly or fully deaf, showing tremendous resilience and emotional depth.",
      musical_influence_summary:
        "Beethoven's works represent the pinnacle of Classical music while also paving the way for the Romantic era. He expanded the symphony, sonata, and string quartet forms, pushing the boundaries of musical expression. His compositions, such as the Eroica Symphony and Ninth Symphony, emphasize personal and emotional expression, shifting music from mere entertainment to a form of profound artistic communication. His innovations in harmony, form, and rhythm profoundly influenced composers such as Schubert, Brahms, and Wagner.",
      image_url: './assets/images/composers/beethovenpng.webp',
      youtube_url:
        'https://www.youtube.com/embed/W-fFHeTX70Q?si=yqX6Pnl-QUox-o96',
    },
    {
      name: 'Wolfgang Amadeus Mozart',
      place_of_birth: 'Salzburg, Austria',
      date_of_birth: '27-01-1756',
      date_of_death: '05-12-1791',
      coordinates: [47.798, 13.0439],
      personal_history_summary:
        'Mozart was born on January 27, 1756, in Salzburg, Austria, into a highly musical family. His father, Leopold, was a court musician and taught him and his sister Nannerl from an early age. Mozart was a child prodigy, performing across Europe by age six. His adult life, however, was marked by financial instability and challenges in securing stable patronage. He moved to Vienna in 1781, where he achieved considerable fame but continued to struggle with debts. Mozart’s personal life was filled with professional and personal ups and downs, including his turbulent marriage to Constanze Weber and the early deaths of several of his children.',
      musical_influence_summary:
        'Mozart’s genius spanned opera, symphony, chamber music, and sacred music. His ability to convey complex emotions with clarity and structure is seen in works such as The Magic Flute and Don Giovanni. His operas innovatively combined drama, comedy, and music in ways that had a lasting impact on the genre. Additionally, his harmonic and structural developments in symphonies, sonatas, and chamber music influenced countless composers, including Beethoven, who revered him. Mozart remains a central figure in the Western classical canon for his balance of technical mastery and profound emotional expression.',
      image_url: './assets/images/composers/mozartpng.png',
      youtube_url:
        'https://www.youtube.com/embed/JTc1mDieQI8?si=kth59kVXnlicEVSc',
    },
    {
      name: 'Frédéric Chopin',
      place_of_birth: 'Żelazowa Wola, Poland',
      date_of_birth: '01-03-1810',
      date_of_death: '17-10-1849',
      coordinates: [52.4095, 16.9349],
      personal_history_summary:
        'Frédéric Chopin was born on March 1, 1810, in Żelazowa Wola, Poland, to a French father and a Polish mother. He showed exceptional musical talent as a child and began composing and performing in public by the age of seven. At 20, Chopin left Poland for Paris, where he spent most of his life, becoming part of the vibrant intellectual and artistic circles of the city. His personal life was marked by health problems, including tuberculosis, and a tumultuous relationship with French writer George Sand. His health deteriorated, and he died at the age of 39 in 1849.',
      musical_influence_summary:
        'Chopin revolutionized piano music with his technically challenging yet deeply emotional works. He focused almost exclusively on the piano, composing a wide range of pieces such as études, nocturnes, and polonaises, which emphasized lyricism, virtuosity, and national identity. His harmonic innovations and use of the rubato technique influenced generations of pianists and composers. His music’s lyrical quality and emotional depth placed him at the forefront of Romantic music, and his work continues to influence classical piano performance and pedagogy.',
      image_url: './assets/images/composers/chopin.webp',
      youtube_url:
        'https://www.youtube.com/embed/wygy721nzRc?si=j6gNGgWwhjiaEMrp',
    },
    {
      name: 'Pyotr Ilyich Tchaikovsky',
      place_of_birth: 'Votkinsk, Russia',
      date_of_birth: '07-05-1840',
      date_of_death: '06-11-1893',
      coordinates: [57.0485, 53.9871],
      personal_history_summary:
        'Pyotr Ilyich Tchaikovsky was born on May 7, 1840, in Votkinsk, Russia, into a middle-class family. Although he initially pursued a career in civil service, he turned to music, enrolling in the Saint Petersburg Conservatory. His life was marked by emotional turmoil, largely stemming from his struggles with his sexuality and the pressures of Russian society. Tchaikovsky’s mental health was often fragile, but his work flourished during this time. Despite his internal battles, he gained international fame, particularly through his ballets Swan Lake and The Nutcracker. He died in 1893, under mysterious circumstances, likely from cholera.',
      musical_influence_summary:
        'Tchaikovsky blended Russian folk music with Western classical traditions, becoming the first Russian composer to gain international acclaim. His music is known for its emotional intensity, brilliant orchestration, and memorable melodies. Works like his Symphony No. 6 (Pathétique) and Romeo and Juliet overture showcase his gift for melodic development and dramatic narrative. Tchaikovsky’s ballets remain staples of the classical repertoire, and his symphonies and concertos influenced the Romantic period and later Russian composers like Rachmaninoff and Shostakovich.',
      image_url: './assets/images/composers/pyotrpng.webp',
      youtube_url:
        'https://www.youtube.com/embed/7_WWz2DSnT8?si=Nm53f6voQKNv5Ikg',
    },
    {
      name: 'Richard Wagner',
      place_of_birth: 'Leipzig, Germany',
      date_of_birth: '22-05-1813',
      date_of_death: '13-02-1883',
      coordinates: [51.4965, 7.4641],
      personal_history_summary:
        'Born on May 22, 1813, in Leipzig, Germany, Richard Wagner came from a theatrical family. His stepfather was an actor and playwright, which exposed Wagner to drama from a young age. Wagner’s early career was marked by political activism and financial difficulties, leading to his exile from Germany. His personal life was highly controversial, particularly his anti-Semitic views and numerous affairs. Despite these controversies, he gained fame with his groundbreaking operas. Wagner built the Bayreuth Festspielhaus, a theater designed specifically for his operas, and it remains a center for Wagnerian performance.',
      musical_influence_summary:
        'Wagner’s concept of the Gesamtkunstwerk (total artwork) integrated music, poetry, and visual arts into a unified whole. His use of leitmotifs (musical themes associated with characters or ideas) in operas such as The Ring Cycle and Tristan und Isolde influenced not only music but also film scoring in the 20th century. Wagner’s innovations in harmony and structure, particularly his use of chromaticism, pushed the boundaries of tonality and influenced composers like Mahler, Strauss, and even the development of atonal music.',
      image_url: './assets/images/composers/wagnerpng.png',
      youtube_url:
        'https://www.youtube.com/embed/GGU1P6lBW6Q?si=tx7oiNDGS2WPR2Ge',
    },
    {
      name: 'Claude Debussy',
      place_of_birth: 'Saint-Germain-en-Laye, France',
      date_of_birth: '22-08-1862',
      date_of_death: '25-03-1918',
      coordinates: [48.8584, 2.2945],
      personal_history_summary:
        'Claude Debussy was born on August 22, 1862, in Saint-Germain-en-Laye, France. He began his musical education at a young age and entered the Paris Conservatoire at the age of 10. His life was marked by unconventional relationships and a rebellious attitude toward traditional musical forms. Debussy was heavily influenced by Symbolist poets and Impressionist painters, and his personal struggles with relationships and health (he battled cancer toward the end of his life) influenced the introspective nature of much of his music. He died in 1918 in Paris during World War I.',
      musical_influence_summary:
        'Debussy’s compositions broke away from the rigid forms of the late Romantic period. His use of unconventional scales (such as the whole-tone scale) and innovative harmonies led to a more fluid and atmospheric style, often referred to as “Impressionist” music. Works like Clair de Lune and La Mer focus on tone color, texture, and mood rather than traditional harmonic progression. Debussy’s music paved the way for 20th-century composers, influencing not only classical music but also jazz and film scores.',
      image_url: './assets/images/composers/debussypng.webp',
      youtube_url:
        'https://www.youtube.com/embed/WNcsUNKlAKw?si=aY-sknGUxwtoVYsv',
    },
    {
      name: 'Igor Stravinsky',
      place_of_birth: 'Lomonosov, Russia',
      date_of_birth: '17-06-1882',
      date_of_death: '06-04-1971',
      coordinates: [59.9343, 30.3351],
      personal_history_summary:
        'Igor Stravinsky was born on June 17, 1882, in Lomonosov, Russia, into a musical family. He initially studied law before turning to music, studying composition with Rimsky-Korsakov. His early collaborations with the Ballets Russes and choreographer Sergei Diaghilev resulted in groundbreaking works such as The Firebird and The Rite of Spring, the latter of which caused a riot at its 1913 premiere in Paris. Stravinsky’s personal life was marked by frequent relocations due to political unrest in Europe, and he spent time in Switzerland, France, and eventually the United States, where he became a naturalized citizen.',
      musical_influence_summary:
        'Stravinsky is considered one of the most influential composers of the 20th century. His ability to reinvent his style—ranging from Russian nationalism to neoclassicism and serialism—kept him at the forefront of modern music. The Rite of Spring revolutionized rhythm, dissonance, and orchestration, influencing generations of composers across genres. Stravinsky’s works shaped not only classical music but also film, jazz, and popular music. His legacy is that of a visionary who constantly pushed the boundaries of what music could be.',
      image_url: './assets/images/composers/igorpng.png',
      youtube_url:
        'https://www.youtube.com/embed/ne4PoC7V0Mk?si=fXQ2ZWttBP_hfMmm',
    },
    {
      name: 'Johannes Brahms',
      place_of_birth: 'Hamburg, Germany',
      date_of_birth: '07-05-1833',
      date_of_death: '03-04-1897',
      coordinates: [53.5511, 9.9937],
      personal_history_summary:
        'Johannes Brahms was born on May 7, 1833, in Hamburg, Germany. He came from a humble background, and his father was a musician who supported the family. Brahms began his musical career at an early age, performing in taverns to help support his family. His life was marked by an intense perfectionism, and he often destroyed works he deemed unworthy. Brahms never married, though he had a deep and complicated friendship with Clara Schumann, the widow of composer Robert Schumann. His private and reserved nature contrasted with the passion and depth of his music. He spent much of his career in Vienna, where he achieved considerable fame.',
      musical_influence_summary:
        'Brahms is often regarded as the heir to Beethoven, continuing the Classical tradition while incorporating Romantic expressiveness. His symphonies, concertos, and chamber works are known for their structural integrity, complex harmonies, and lyrical melodies. Brahms balanced the intellectual rigor of counterpoint with deep emotional content, as heard in his Symphony No. 4 and German Requiem. His influence extended to later composers such as Dvořák and Elgar, and his work remains central to the orchestral and chamber music repertoire.',
      image_url: './assets/images/composers/bramhspng.webp',
      youtube_url:
        'https://www.youtube.com/embed/Nzo3atXtm54?si=7aKLJH99tg731Bop',
    },
    {
      name: 'Gustav Mahler',
      place_of_birth: 'Kaliště, Czech Republic',
      date_of_birth: '07-07-1860',
      date_of_death: '18-05-1911',
      coordinates: [49.4478, 15.2283],
      personal_history_summary:
        'Gustav Mahler was born on July 7, 1860, in Kalischt, Bohemia (now part of the Czech Republic), to a Jewish family. He showed musical talent early on, eventually studying at the Vienna Conservatory. Mahler faced anti-Semitism throughout his career but managed to secure prominent conducting positions in Vienna, New York, and other major cities. His personal life was marked by tragedy, including the death of his young daughter and his own struggles with heart disease. Mahler converted to Christianity to advance his career in the predominantly Catholic Austro-Hungarian Empire but remained culturally Jewish. He died in 1911 at the age of 50.',
      musical_influence_summary:
        'Mahler’s symphonies are monumental, blending elements of song, symphonic form, and narrative. His works often grapple with existential questions and feature dramatic contrasts between the sublime and the grotesque. His orchestration, which employed massive forces, and his innovative approach to symphonic form influenced composers such as Shostakovich, Britten, and Schoenberg. Mahler’s music, once considered too complex, is now regarded as some of the most profound of the late Romantic era, bridging the gap between Romanticism and Modernism.',
      image_url: './assets/images/composers/mahlerpng.png',
      youtube_url:
        'https://www.youtube.com/embed/Bj6KLv7kv2Q?si=TddEpxlZa0xcZPYM',
    },
  ];

  var map = L.map('map').setView([50.7374, 7.0982], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  composers.forEach((composer) => {
    const marker = L.marker(composer.coordinates).addTo(map).bindPopup(`
                This is ${composer.place_of_birth}. The birth place of ${composer.name}. 
                <br> <button class="info-button" data-name="${composer.name}">Click here for more information</button>
            `);

    marker.on('popupopen', function () {
      const infoButton = document.querySelector(
        '.info-button[data-name="' + composer.name + '"]'
      );

      if (infoButton) {
        const newButton = infoButton.cloneNode(true);
        infoButton.parentNode.replaceChild(newButton, infoButton);

        newButton.addEventListener('click', function () {
          handleMarkerClick(composer);
        });
      }
    });
  });

  function handleMarkerClick(content) {
    extraInfo.classList.remove('hidden');
    lifeHistory.classList.remove('hidden');
    composerSmall.classList.remove('hidden');
    /*Content html update for larger screens*/
    artistFrom.innerHTML = `<p>From: ${content.place_of_birth}</p>`;
    artistBirth.innerHTML = `<p>Born : ${content.date_of_birth}</p>`;
    artistDeath.innerHTML = `<p> Died: ${content.date_of_death}</p>`;
    artistName.innerHTML = `<p> Name: ${content.name}</p>`;
    artistImage.innerHTML = `<img src=${content.image_url} alt="Image of ${content.name}">`;
    /*content html update for smaller screens*/
    /*Due to differences in stylig, these are added manually rather than using a loop for both large and small screens*/
    artistFromSm.innerHTML = `<p>From:  ${content.place_of_birth}</p>`;
    artistBirthSm.innerHTML = `<p>Born:  ${content.date_of_birth}</p>`;
    artistDeathSm.innerHTML = `<p> Died:  ${content.date_of_death}</p>`;
    artistNameSm.innerHTML = `<p> Name:  ${content.name}<p>`;
    artistImageSm.innerHTML = `<img src=${content.image_url} alt="Image of ${content.name}">`;

    /*personal and musical history html input*/
    personalHistory.textContent = content.personal_history_summary;
    musicalInfluence.textContent = content.musical_influence_summary;
    youtubeHeading.innerHTML = `<h3> Famous work from ${content.name}</h3>`;
    youtubeVideo.innerHTML = `<iframe width="560" height="315" src="${content.youtube_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }

  const listItems = document.querySelectorAll('ul li');

  listItems.forEach((item) => {
    item.addEventListener('click', function () {
      const clickedName = item.textContent.trim();

      composers.forEach((composer) => {
        if (composer.name.includes(clickedName)) {
          map.flyTo(composer.coordinates);
        }
      });
    });
  });
});
