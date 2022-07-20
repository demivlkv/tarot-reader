const headerEl = document.querySelector('.header');
const introEl = document.querySelector('.intro');

function card(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
};

// create an array to display tarot cards
const deck = [
    new card("The Fool", "The Fool represents a person who is about to set off on a journey. They are often pictured on a high cliff, ready to step into the unknown. They make no plans, nor give thought to possible complications along the way. Always happy to be trying something different, they blindly set out where others may fear treading. The Fool indicates the asker is about to mark a new start in life. It is the beginning of a new cycle and there is fresh energy. This card invites the asker to tap into optimism, light-heartedness and play. Life is an adventure and your potential is limitless!", "00 The Fool"),
    new card("The Magician", "This card represents new possibilities that will make the asker use their talents, originality and inventiveness. The Magician reminds us to tap into our resourcefulness. The energy of this card is very powerful. Considered the ruler of reality, the Magician has control over all circumstances. Our greatest strength comes from harnessing our inner thoughts and beliefs about the world and ourselves. This is a great card to pull if the asker is involved in business or financial undertakings, as it indicates they have what they need to succeed. The card can also suggest an important man is coming into the asker’s life, whether that be a friend, counselor or business partner.", "01 The Magician"),
    new card("High Priestess", "The High Priestess represents dreams, knowledge and intuition. The energy of this card reminds us our inner wisdom is all-knowing, and the answers to our questions lie deep within. The challenge is to go beyond the veil of the rational mind and connect with your soul. The asker is encouraged to trust themselves and their inner knowing. The High Priestess card symbolizes the guardian between the conscious and subconscious; she can be seen as a guide to bring us back to our core nature and follow our psychic or intuitive senses. It can also serve as a reminder to connect with your divine feminine nature and the energies of compassion, empathy and stillness.", "02 High Priestess"),
    new card("The Empress", "The Empress is the mother figure of the tarot deck, symbolizing love, nurture and pleasure. This card also signifies a period of growth and abundance, during which seeds thaThave been planted in our lives come to fruition. It often shows up when the asker is entering a creative or productive phase. This card can also show up when we have an urge or are placed in the role of mothering others, whether they be a child, friend or family member. It may even signify the birth of a child. The Empress is a fortunate omen for many significant life transitions. If the asker is entering a new relationship or taking it to the next level, The Empress indicates the union will be happy and long-lasting. If the asker is planning on moving, this card suggests everything will run smoothly. The Empress is also associated with belongings, therefore marking a good time to invest in beautiful things that will spark joy.", "03 The Empress"),
    new card("The Emperor", "The Emperor is the father figure of the tarot deck, signifying wisdom, authority and grounded energy. He has seen adversity and experienced life’s triumphs and tribulations. With knowledge acquired along his path, he is able to translate it into thoughtful guidance. This card can be a reminder to tap into inner assertiveness and leadership abilities. The asker is invited to review areas in their life that could benefit from firmer boundaries. They are encouraged to stand up for themselves and what they believe in. If the card represents a situation, the asker can best meet the circumstances by embodying the energies of willpower, reasoning and logical analysis. It can also signify the asker will get a new job or be promoted.", "04 The Emperor"),
    new card("Hierophant", "The Hierophant card signifies an opportunity to connect with the divine for guidance or connection. It is also a reminder that the asker is being supported by a higher source. If they are going through a challenging period, they are also encouraged to reach out to others for support, whether that be a counselor or a friend they respect. The Hierophant often symbolizes the need to delve into the deeper meaning of life and connect with spiritual values. This may include the asker expanding their knowledge or further exploring their divine connection. If the card represents a situation, The Hierophant is a sign to follow the safer route; it’s not the right moment to take big risks.", "05 Hierophant"),
    new card("The Lovers", "The Lovers card represents connection, relationships and love. It is often indicative of an emotionally strong relationship and close bond, whether it be in a romantic partnership, friendship or family dynamic. If the asker has recently split with their partner and is seeking resolution, this card may signify they will find their way back to each other. The Lovers card is also about duality and choice. The asker might be facing a situation where they need to decide between two different paths. This could be in their work life, living situation, relationship or another area. This card serves as a reminder that the best decisions are made when we are in touch with our value system and make choices aligned with our personal beliefs.", "06 The Lovers"),
    new card("The Chariot", "The Chariot is a card of courage, willpower and tenacity. The asker may be facing a challenge or struggle in their life where their character and drive are being tested. They are being asked to have faith and take decisive action when it comes to pursuing their dreams. It is also an indication that the situation will resolve positively and will help the asker grow spiritually and materially. The Chariot can also represent a relationship thaThas recently been marked by challenges or conflict. It is a reminder to practice self-control and patience in the face of adversity and to remain calm when triggered. If the asker is facing financial challenges and is struggling to keep their head above water, The Chariot is a sign that things will take a positive turn. The card encourages them to stay strong and determined, as they forge ahead with their goals.", "07 The Chariot"),
    new card("The Hermit", "The Hermit card signifies a period of introspection, quiet and reflection. The asker may be feeling depleted or at a pivotal moment in their life when they are questioning their path and encountering existential questions. The Hermit is a reminder that it is ok to retreat to their private world for a period of time. The asker is encouraged to make space for meditation, contemplation and journaling. The Hermit reveals that the answers to life’s challenges and questions can be found within. The asker is told to tap into their intuition and wisdom. This is also a powerful opportunity to explore feelings or emotions thaThave been repressed. By facing and releasing these feelings, the asker will feel lighter. When The Hermit card appears, it’s also an indication to pause and keep all options open in the asker’s external world. More details or other sides of the story may soon arise; they are encouraged to be patient and review decisions before forging ahead.", "09 Hermit"),
    new card("Wheel of Fortune", "The Wheel of Fortune is a powerful card signifying change, karma and the cyclical nature of life. The external world is ever-evolving and shifting beyond our control, which can sometimes feel chaotic and unpredictable. The asker is being reminded to keep their inner center and emotional balance amid these challenges. They are asked to roll with the ebbs and flows of life without getting caught up in drama that may arise. The Wheel of Fortune also symbolizes the cycle of karma, and how the energy we put forth in the world will return to us. Be mindful of your actions and mindset. This card can often signify the asker will soon be starting a new chapter in their life. It is a reminder to be optimistic and have faith, as the Universe is supporting your path.", "10 Wheel of Fortune"),
    new card("Justice", "The Justice card symbolizes truth, law and fairness. It is about restoring harmony in the face of imbalance or conflict. This card is a reminder to be accountable for our actions. If the asker has recently been seeking justice in a situation where there is litigation or a dispute, the Justice card shows the problem will come to a positive conclusion. This card also signifies the need to face the truth about a given situation that we may have tried to overlook or avoid. The asker is encouraged to take a step back and observe the situation from a neutral and unbiased position. Justice is a great card to pull if the asker is starting a new relationship or business partnership, as it indicates it will be harmonious.", "11 Justice"),
    new card("Hanged Man", "The Hanged Man often signifies the asker is currently in a holding pattern; they may feel stalled in their projects, or as though the Universe has put a pause on their life. There is a sense of waiting for a chapter to be over, so they can start anew. This card is a reminder to be patient and utilize this time to reflect, as there are many important lessons to be learned from their recent experiences. This card can also be encouraging the asker to view life from a more spiritual perspective and tap into their heart’s wisdom. If they have been pursuing goals out of alignment with their calling, this is a positive time to plan a shift. The Hanged Man tells us that the road to fulfilling our dreams often comes with some sacrifice, but this will enable the asker to achieve a greater goal", "12 Hanged Man"),
    new card("Death", "The Death card represents change and rebirth. The asker is undergoing a period of significant transformation in their life. They will have the opportunity to leave the past behind and start anew. This card can indicate changes in a relationship, job, or a shift in mindset, releasing old traumas. The Death card is a reminder that transitions may feel overwhelming, but are ultimately for the best. One day, the asker will look back and understand why certain events took place. They are encouraged to release their fear of a new beginning. The future is bright.", "13 Death"),
    new card("Temperance", "The Temperance card represents balance, alchemy and moderation. It arises as a reminder for the asker to practice self-care and seek equilibrium within themselves. If they have recently been working hard or burning the candles at both ends, Temperance is a sign to make time for rest and restoration. We can only be of service to others when we feel replenished. Temperance also signifies it is a time to follow a centered path and avoid extremes. This card is also an encouraging sign for the asker to embrace who they are and fully own their talents. Make a plan to achieve your goals in a steady and sustainable way.", "14 Temperance"),
    new card("The Devil", "The Devil symbolizes our shadow self. This includes the limiting beliefs and critical voice inside ourselves that stall our journey, and makes us feel unworthy or incapable of achieving our dreams. When this card arises, the asker is being encouraged to confront and question the inner saboteur that is holding them back. These beliefs feel real, but are in fact a mirage hiding our true power. It is a time to bring these thoughts to conscious awareness. It is also a reminder to take responsibility for our feelings and avoid projecting them onto others. The Devil card can also represent our sexuality and a strong attraction or bond with another. It is an invitation to explore this side in a way that feels safe and enriching.", "15 Devil"),
    new card("The Tower", "The Tower card signifies change, rebuilding and healing. There may have been a sudden change in the asker’s life that felt like a lightning bolt emerged from the sky. These energies can often feel jarring, unexpected or stressful. The Tower is a sign that foundations may have been built on shaky ground, and this a positive opportunity to rebuild something stronger and more sustainable. This card is not to be feared. Everything is happening for the best. The Tower can also signify the asker has come faceto-face with their true feelings about a situation or old traumas they can no longer ignore. There is a tremendous opportunity for release, surrender and healing. By fully acknowledging and feeling our feelings, we are given a chance to leave the past behind and start fresh.", "16 The Tower"),
    new card("The Star", "The Star card represents good luck. It suggests the asker has a dream that is about to become reality, or a specific part of their life will soon be f illed with satisfaction and happiness. The asker may have recently gone through a tumultuous or challenging time. The Star symbolizes renewed hope and belief in the future. There was much knowledge and wisdom to be gained during their struggles, and they are now reaching a period of reprieve and peace. The Star is also reminding the asker to connect with their True North and life’s purpose. They have a beautiful opportunity to explore what will bring greater fulfillment into their life and how they can best contribute to the greater good. Life’s challenges help develop our empathy for others. Share your gifts to illuminate and improve the paths of others.", "17 Star"),
    new card("The Moon", "The Moon card represents the power of the subconscious. It often signifies there are fears below the surface that are driving the asker’s beliefs and actions. This card is a reminder to look below the surface of the conscious mind and uncover the thoughts that are governing their perceptions. Pay close attention to your dreams when The Moon card comes up, as they may provide clues to whaThas been brewing within the subconscious. This card also invites the asker to connect with the cyclical nature of life and pay special attention to the moon’s phases. If the card is pulled near a new or full moon, it is a powerful opportunity to meditate, journal and set intentions (new moon) or release (full moon). Furthermore, this card can sometimes point to an error in communication. If the asker has upcoming travel plans, they are encouraged to review everything twice.", "18 Moon"),
    new card("The Sun", "The Sun is often recognized as the most positive card in the deck, symbolizing light, happiness and vitality. If the asker has recently gone through a challenging time, it is a positive omen that joy and abundance are around the corner. The Sun is attributed to the solar plexus chakra, embodying the energies of self-confidence and being fully present in the moment. The asker will be radiating positive energy. This card is also a reminder that behind every cloud is the dawn of a new day. The Sun card may even predict that new love is on the way, or there will be good news about a pregnancy or a birth. It can also mean career success and material rewards.", "19 Sun"),
    new card("Judgement", "The Judgement card symbolizes transformation, spiritual rebirth and a new beginning. The asker has reached an important pinnacle in their journey where they are given an opportunity to develop a deeper understanding of their personal consciousness and forge beyond any old wounds or limitations they’ve placed on their potential. There is a chance to clear the energy of the past, forgive any wrongdoings and start anew. When it comes to making future decisions, this card signifies the importance of connecting with your higher self, using a blend of intuition and rationality rooted in the lessons you have learned. Judgement is a positive omen if the asker has recently been working hard on a project. It indicates a positive outcome, and potentially, a new job or position.", "20 Judgement"),
    new card("The World", "The World is a powerful card indicating the completion of a life phase and is marked by a sense of completion and accomplishment. The asker may have recently finished a long awaited project, achieved a dream or experienced a major life event. This card is a rite of passage, symbolizing the ending of one cycle and the start of another. There is a spiritual essence to The World card. It provides an opportunity for the asker to honour and reflect on their journey thus far; the successes and challenges they have encountered, and who they’ve become in the process. Take time to celebrate and express gratitude for the experiences along the way. If the asker has been thinking about making a big change, whether it be a new job or moving, The World card is a positive indication to move forward. It also represents travel and can be a sign for the asker to broaden their horizons and immerse themselves in other cultures.", "21 World")
];

// randomize tarot cards
function getRandom(num) {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

// get a random card upon clicking "draw" button
document.getElementById("draw").onclick = function() {
    display();
    
    const index = getRandom(21);
    const currentCard = deck[index];

    // get respective information associated with drawn currentCard
    document.getElementById("card").innerHTML = '<img src="./assets/images/' + currentCard.image + '.png"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
};

function display() {
    headerEl.classList.add('hide');
    introEl.classList.add('hide');
};

