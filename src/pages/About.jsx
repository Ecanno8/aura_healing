import React from "react";
import "../styles/About.css";

const aboutImg = "/images/IMG_7733_websize.jpg";

export default function AboutPage() {
    return (
        <div className="about-client-container">
            <div className="about-client-image">
                <img src={aboutImg} alt="Laura Agustina Castillo" />
            </div>
            <div className="about-client-text">
                <p>
                    My name is Laura Agustina Castillo. I stand rooted in the lineage of several generations of
                    healers. In this modern world, I carry forward the sacred gifts of my ancestors—integrating
                    traditional wisdom rooted in indigenous knowledge with healing modalities that nurture the mind,
                    body, and spirit.
                </p>

                <p>
                    My work weaves together ancestral healing traditions from my father’s lineage, Reiki and
                    somatic practices. I am devoted to providing grounded, compassionate guidance rooted in
                    tradition and adapted for the modern world.
                </p>

                <p><strong>
                    This is more than a practice.<br />
                    It is a legacy.<br />
                    It is devotion.<br />
                    It is a return to wholeness.
                </strong></p>

                <p>
                    I am the first born daughter of immigrant parents, a bridge between generations, cultures, and worlds.
                </p>

                <p>
                    My father was born in Puebla, Mexico, in a small town where his great-grandfather was known as the
                    community healer—the Curandero. He told stories of watching this sacred work unfold: the use of herbs
                    and fire, the quiet strength of ritual, and the deep, spiritual connection that guided each cleansing
                    performed by hand.
                </p>

                <p>
                    From an early age, I was immersed in stories of healing that later became teachings and inheritance.
                    I watched my father carry forward these sacred traditions, performing limpias—cleansing rituals using
                    an egg to sweep the body’s energy field, followed by reading its pattern in the water for spiritual insight.
                </p>

                <p>
                    What some might call folklore, I came to understand as lineage. A remembrance. And a responsibility to carry on.
                </p>

                <p>
                    My mother was born in San Miguel, El Salvador. Her stories are rich with warmth and abundance, shaped by a life
                    grounded in simplicity and deep bond with the natural world. She spent much of her childhood and early adulthood
                    outdoors, surrounded by fertile earth—experiences that instilled in her a profound sense of groundedness from a very
                    young age. In turn, she gently nurtured those same qualities within me, planting those roots early in my own life as well.
                </p>

                <p><strong>
                    What was once a story became an inheritance;<br />
                    What was an inheritance became a devotion.
                </strong></p>

                <p>
                    As a modern healer, I walk as a bridge between generations, cultures, and ways of knowing.
                </p>

                <p>
                    From my father’s lineage where healing was practiced with reverence and ritual, and from my mother’s roots where
                    the earth itself was a teacher and guide—I carry both sacred tradition and grounded presence.
                </p>

                <p>
                    Those who choose to work with me are not simply receiving a service—they are entering a space held by lineage,
                    lived experience, and a deep respect for the spiritual and natural worlds.
                </p>

                <p>
                    I offer a container that is intuitive yet embodied, ancestral yet attuned to the present. Where healing is not rushed,
                    but remembered.
                </p>
            </div>
        </div>
    );
}