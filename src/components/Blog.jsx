import Reveal from './Reveal'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <section id="blog" aria-labelledby="blog-heading">
      <div className={`container ${styles.container}`}>
        <Reveal>
          <p className="section-label">Writing</p>
          <h2 id="blog-heading" className="section-title">Blog<span>.</span></h2>
        </Reveal>

        <Reveal delay={80}>
          <article className={styles.post}>
            <header className={styles.header}>
              <p className={styles.kicker}>Food, culture &amp; preference</p>
              <h3>Authenticity Isn&apos;t the Same as Enjoyment</h3>
              <time className={styles.date} dateTime="2026-08-03">3rd August, 2026</time>
              <p className={styles.dek}>
                Why the most authentic meal and the meal you enjoy most are not always the same thing.
              </p>
            </header>

            <div className={styles.body}>
              <p>A few days ago, I found myself thinking about something surprisingly controversial: why are people so obsessed with “authentic” food?</p>
              <p>I&apos;m not arguing that authenticity has no value. I&apos;m questioning whether we&apos;ve accidentally started using <em>authentic</em> as a synonym for <em>good</em>. I don&apos;t think those two words mean the same thing.</p>

              <h4>Taste Isn&apos;t a Universal Constant</h4>
              <p>Imagine someone asks me where to get the best tacos. I could recommend a small family-owned taqueria in Mexico City because it&apos;s authentic. Or I could recommend Taco Bell because, honestly, I enjoy eating it.</p>
              <p>Those are entirely different claims. One says, “This closely resembles the traditional way this cuisine evolved.” The other says, “I enjoyed eating this.” Neither statement logically implies the other.</p>
              <p>An authentic dish can taste terrible to me. An inauthentic dish can become one of my favorite meals. Authenticity and enjoyment are different axes.</p>

              <h4>The Equation in My Head</h4>
              <p>Rather than reducing food to taste alone, maybe our overall experience is closer to this:</p>
              <div className={styles.equation} aria-label="Food experience equals a function of taste, environment, emotion, memory, and expectation">
                Food Experience = f(Taste, Environment, Emotion, Memory, Expectation)
              </div>
              <p>Taste is only one variable. The exact same soup tastes different outside on a freezing winter day than it does in the middle of a humid summer afternoon. The recipe hasn&apos;t changed; you have. Your surroundings have.</p>
              <p>Likewise, the biryani your grandmother cooked when you were ten may not objectively be the greatest biryani ever made. But your experience included family, childhood, home, and countless memories that no restaurant can reproduce. When people say a restaurant feels “authentic,” I wonder if they&apos;re often describing those memories as much as the food itself.</p>

              <h4>Authentic to Whom?</h4>
              <p>Suppose I walk into an Indian restaurant. As someone of Indian descent, I might notice that the spices are different, the naan isn&apos;t quite right, or the butter chicken is sweeter than I&apos;m used to. Someone who has never been to India might think it&apos;s incredible. Who&apos;s correct?</p>
              <p>I think both of us are. We&apos;ve simply built different expectations over the course of our lives.</p>

              <h4>Everyone Learns From Different Data</h4>
              <p>This is where my machine learning brain couldn&apos;t help itself. Imagine every person&apos;s preferences as an internal model built from experience. Mine has been shaped by growing up eating Indian food, family recipes, foods I associate with comfort, cultural expectations, and countless experiences that quietly accumulated over time.</p>
              <p>Someone raised in rural Japan has a different model. Someone raised in Texas has another. Someone who grew up eating only Americanized Chinese food has yet another. There is no reason these internal models should be identical.</p>
              <p>When someone recommends a restaurant, they&apos;re implicitly making a prediction, not about the restaurant, but about me. They&apos;re effectively saying: “If your preferences looked enough like mine, I think you&apos;d enjoy this place.”</p>
              <p>That reminded me of Kullback–Leibler (KL) divergence: the information lost when one probability distribution is used to approximate another. I&apos;m using it as a metaphor, not a scientific model of human cognition. Preferences are vastly more complicated than any one equation; they&apos;re shaped by culture, memory, identity, mood, genetics, social context, and countless other variables.</p>
              <p>But the intuition is useful. If I make decisions as though your internal model of good food were my own, how much information am I losing? The more our experiences differ, the less informative your recommendations become, not because you&apos;re wrong, but because your model was trained on a different dataset than mine.</p>
              <aside className={styles.note}><strong>Why KL divergence?</strong> Jensen–Shannon divergence asks how different two distributions are. My question is asymmetric: how much information do I lose if I use <em>your</em> preferences as a proxy for <em>mine</em>? That feels closer to KL divergence.</aside>

              <h4>So… Are Restaurant Ratings Meaningless?</h4>
              <p>Not at all. They&apos;re useful, but only if we understand what they&apos;re measuring. A restaurant&apos;s rating is an average across hundreds or thousands of people. It doesn&apos;t say, “You will love this restaurant.” It says something closer to, “Many people with different backgrounds reported enjoying this restaurant.”</p>
              <p>That&apos;s valuable information, but it&apos;s not a guarantee. This is exactly why recommendation systems like Netflix or Spotify don&apos;t simply recommend the highest-rated content. They try to learn your preferences. Restaurant recommendations work the same way.</p>

              <h4>A Four-Star Restaurant Can Beat a Five-Star One</h4>
              <p>There are restaurants in India with mediocre ratings that I&apos;d happily revisit. There are highly rated restaurants in the United States that left me thinking, “That was… fine.” The ratings weren&apos;t wrong. They were describing the average experience, not mine.</p>

              <h4>Objective Quality Does Exist</h4>
              <p>I&apos;m not arguing that everything is subjective. Food safety, freshness, consistency, cleanliness, and proper cooking are measurable. If a restaurant repeatedly serves unsafe food, poor ratings reflect something real.</p>
              <p>But once those baseline standards are met, many differences become deeply personal: how much spice you enjoy, whether you like sweeter sauces, whether smoky flavors remind you of home or overwhelm you, and whether the atmosphere feels comforting or noisy.</p>

              <h4>Maybe “Authentic” Is the Wrong Question</h4>
              <p>Instead of asking, “Is this authentic?” maybe a better question is, “What kind of experience is this restaurant trying to create?” Some restaurants preserve tradition. Others adapt recipes for local tastes. Neither approach is inherently better; they&apos;re simply optimizing for different goals.</p>
              <p>Authenticity is one value. Enjoyment is another. Sometimes they overlap. Sometimes they don&apos;t.</p>

              <h4>The Bigger Idea</h4>
              <p>I think this extends far beyond food: movies, books, music, politics, even morality. We often treat personal preferences as objective truths, forgetting that they were shaped by years of experiences that other people simply haven&apos;t had.</p>
              <p>Maybe disagreement isn&apos;t always evidence that someone has bad taste. Maybe they just learned from a different dataset. And that&apos;s okay.</p>
              <p>The next time someone tells me that a restaurant is “objectively the best,” I&apos;ll probably still go try it. But I&apos;ll remember that I&apos;m not borrowing their tongue, their memories, or their life. Only my own.</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
