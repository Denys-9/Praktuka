import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Nove Tilo Fitnes Klub</h1>
      <nav>
        <ul>
          <li><Link to="/">Головна Сторінка</Link></li>
          <li><Link to="/about">Про Нас</Link></li>
          <li><Link to="/pricing">Цінові Плани та Акції</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const WelcomeSection = () => {
  return (
    <section>
      <h2>Привітання та Запрошення</h2>
      <p>Ласкаво просимо в Nove Tilo Fitnes Klub! Запрошуємо вас в наш фітнес-зал, де ви зможете досягти своїх фітнес-цілей та покращити своє здоров'я.</p>

      {/* Зона Тренувань */}
      <section>
        <h2>Зоны Тренувань</h2>

        <div style={{ textAlign: 'center' }}>
          <h3>Кардіо Зона</h3>
          <p>Зона для кардіо тренувань призначена для поліпшення витривалості та здоров'я серця. Тут ви знайдете бігові доріжки, велотренажери та інші кардіо-обладнання.</p>
          <img src="cardio.jpg" alt="Cardio Zone" />
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3>Силова Зона</h3>
          <p>Для тих, хто хоче підняти ваги та зміцнити м'язи, у нас є силова зона з широким асортиментом вагових тренажерів та гантелей.</p>
          <img src="strength.jpg" alt="Strength Zone" />
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3>Групові Заняття</h3>
          <p>Приєднуйтесь до наших групових занять, де ви зможете тренуватися під керівництвом професійних інструкторів та здобувати нові навички.</p>
          <img src="group.jpg" alt="Group Classes" />
        </div>
      </section>

      {/* Розклад Роботи */}
      <section>
        <h2 id="schedule">Розклад Роботи</h2>

        <ul>
          <li><strong>Понеділок:</strong>
            <ul>
              <li>⏰ 12:00 - SUPER SCULPT</li>
              <li>⏰ 13:00 - STRETCHING</li>
              <li>⏰ 18:30 - BUMS + ABS</li>
            </ul>
          </li>

          <li><strong>Вівторок:</strong>
            <ul>
              <li>⏰ 12:00 - LEGS & BUTTS</li>
              <li>⏰ 13:00 - AQUA STRONG</li>
              <li>⏰ 13:00 - TRI YOGA</li>
            </ul>
          </li>

          <li><strong>Середа:</strong>
            <ul>
              <li>⏰ 12:00 - FUNCTIONAL</li>
              <li>⏰ 18:30 - TABATA</li>
            </ul>
          </li>

          <li><strong>Четвер:</strong>
            <ul>
              <li>⏰ 12:00 - LEGS & BUTTS</li>
              <li>⏰ 13:00 - AQUA STRONG</li>
              <li>⏰ 13:00 - TRI YOGA</li>
            </ul>
          </li>

          <li><strong>П’ятниця:</strong>
            <ul>
              <li>⏰ 12:00 - SUPER SCULPT</li>
              <li>⏰ 15:00 - AQUA STRONG</li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};




const TeamSection = () => {
  return (
    <section id="gym">
      <h2>Тренажерний зал</h2>
      <p>Ваш особистий тренер – запорука успіху. Багато початківців, завітавши до фітнес-клубу вперше, помилково вважають, що достатньо частих та активних тренувань, аби досягти результатів. На жаль, це не так. Запорукою успіху являються зовсім не виснажливі тренування, а грамотний до них підхід.</p>
      <div className="team-members">
        <div className="team-member">
          <img src="marina_kobets.jpg" alt="Team Member 1" />
          <div className="text">МАРИНА КОБЕЦЬ</div>
        </div>
        <div className="team-member">
          <img src="dmitro_nikolaevich.jpg" alt="Team Member 2" />
          <div className="text">ДМИТРО НІКОЛАЄВІЧ</div>
        </div>
        <div className="team-member">
          <img src="olga_vertegel.jpg" alt="Team Member 3" />
          <div className="text">ОЛЬГА ВЕРТЕГЕЛ</div>
        </div>
        <div className="team-member">
          <img src="bogdan_baranetsky.jpg" alt="Team Member 4" />
          <div className="text">БОГДАН БАРАНЕЦЬКИЙ</div>
        </div>
        {/* Додайте інші командирувати тут */}
      </div>
    </section>
  );
};

const GroupProgramsSection = () => {
  return (
    <section id="group-programs">
  <h2>Групові програми</h2>
  <p>Наші фітнес-тренери – висококваліфіковані спеціалісти з великим досвідом. Кожен з них має безліч спортивних досягнень, про які свідчать незліченні нагороди. Всі тренери мають свою вузьку спеціалізацію, з якою справляються на «відмінно».</p>
  <div className="team-members">
    <div className="team-member">
      <img src="miroshnichenko_inesa.jpg" alt="Team Member 5" />
      <div className="text">МИРОШНІЧЕНКО ІНЕСА</div>
    </div>
    <div className="team-member">
      <img src="karina_hachatryan.jpg" alt="Team Member 6" />
      <div className="text">КАРІНА ХАЧАТРЯН</div>
    </div>
    <div className="team-member">
      <img src="karina-ha.jpg" alt="Team Member 7" />
      <div className="text">ОЛЬГА БЛОХІНА</div>
    </div>
    <div className="team-member">
      <img src="mike_polukarov.jpg" alt="Team Member 8" />
      <div className="text">МАЙК ПОЛУКАРОВ</div>
    </div>
    {/* Додайте інші командирувати тут */}
  </div>
</section>

  );
};

const PricingSection = () => {
  return (
    <section id="pricing">
  <h2>Цінові Плани та Акції</h2>

  <div className="price-plans">
    <div className="price-plan">
      <div className="price">$100</div>
      <div className="plan-title">SPORT</div>
      <ul>
        <li>✓ Тренажерний зал</li>
        <li>✓ Групові тренування</li>
        <li>✓ Роздягальня</li>
      </ul>
    </div>

    <div className="price-plan">
      <div className="price">$199</div>
      <div className="plan-title">SPORT-POOL</div>
      <ul>
        <li>✓ Басейн</li>
        <li>✓ Тренажерний зал</li>
        <li>✓ Групові тренування</li>
        <li>✓ Роздягальня</li>
      </ul>
    </div>

    <div className="price-plan">
      <div className="price">$249</div>
      <div className="plan-title">LUX&SPA</div>
      <ul>
        <li>✓ Басейн</li>
        <li>✓ Тренажерний зал</li>
        <li>✓ Premium тренажерний зал</li>
        <li>✓ Групові заняття</li>
        <li>✓ Premium групові заняття</li>
        <li>✓ Лазневий комплекс</li>
        <li>✓ Заморозка 30 днів</li>
        <li>✓ Комплект рушників</li>
        <li>✓ Premium роздягальня</li>
        <li>✓ Халат в Lux клубах</li>
      </ul>
    </div>
  </div>
</section>
  );
};

const Footer = () => {
  return (
    <footer>
      © 2024 Nove Tilo Fitnes Klub. Усі права захищено.
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/about" element={<TeamSection />} />
          <Route path="/pricing" element={<PricingSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





