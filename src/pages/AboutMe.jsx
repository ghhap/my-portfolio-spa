function AboutMe() {
  return (
    <section className="page">
      <h1>Про мене</h1>

      <div className="card profile-card">
        <div className="avatar">👨‍💻</div>

        <div>
          <h2>Коротко про себе</h2>
          <p>
            Мене звати Олексій. Я геній, плейбой, філантроп  
          </p>
        </div>
      </div>

      <div className="card">
        <h2>Цінності, захоплення та навчання</h2>
        <p>
         Я відповідально ставлюсь до роботи. Все роблю в останній момент і далі
         йду кайфувати на ліжечку
        </p>

        <p>
          Під час навчання я працював з PHP, Windows 7, а також Windows XP. І це не кінець,
          список великий, але про це у другому відео 
        </p>
      </div>

      <div className="card">
        <h2>Мої проєкти</h2>

        <div className="projects">
          <div className="project-item">
            <h3>Дім у майнкрафт</h3>
            <p>Простий дім із землі</p>
          </div>

          <div className="project-item">
            <h3>JavaScript</h3>
            <p>Усіляке там робили</p>
            <a href="https://github.com/ghhap/js-DOM1" target="_blank" rel="noreferrer">
              Перейти до репозиторію
            </a>
          </div>

          <div className="project-item">
            <h3>Симулятор виживання в Україні</h3>
            <p>Досі в розробці</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe