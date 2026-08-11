const blindSpots = [
  {
    number: "01",
    title: "O lead chega — e espera",
    text: "Você já pagou pelo clique. Mas uma resposta lenta dá tempo para o paciente procurar outra clínica.",
  },
  {
    number: "02",
    title: "A conversa perde o dono",
    text: "Quando todos atendem, ninguém sabe com clareza quem assumiu cada oportunidade.",
  },
  {
    number: "03",
    title: "O follow-up depende da memória",
    text: "A conversa desce no histórico. A rotina aperta. E o retorno que deveria acontecer simplesmente não acontece.",
  },
  {
    number: "04",
    title: "O gestor descobre tarde demais",
    text: "Sem rastreio, você vê a agenda com buracos — mas não enxerga onde o caminho quebrou.",
  },
];

const trail = [
  ["Origem", "De onde esse lead veio?"],
  ["Qualificação", "O que ele procura?"],
  ["Atendimento", "Quem assumiu?"],
  ["Follow-up", "A conversa continuou?"],
  ["Agendamento", "Virou paciente na agenda?"],
  ["Monitoramento", "Onde o fluxo travou?"],
];

const modules = [
  {
    tag: "Módulo 01",
    title: "Anatomia do banimento",
    text: "Entenda os principais gatilhos de risco e por que uma operação profissional precisa abandonar improvisos.",
  },
  {
    tag: "Módulo 02",
    title: "Infraestrutura oficial",
    text: "Conheça os requisitos e o caminho para operar com a estrutura oficial do WhatsApp, sem precisar virar técnico.",
  },
  {
    tag: "Módulo 03",
    title: "O ponto cego dos leads",
    text: "Veja onde o lead esfria depois do clique e por que mais tráfego não corrige um atendimento sem processo.",
  },
  {
    tag: "Módulo 04",
    title: "Gestão e visibilidade",
    text: "Aprenda a acompanhar origem, responsável, follow-up, equipe e gargalos com mais clareza.",
  },
];

const faqs = [
  {
    q: "Essa aula é para quem está começando uma clínica?",
    a: "O conteúdo foi pensado principalmente para médicos que já têm uma clínica funcionando, investem em aquisição de pacientes e contam com uma equipe de atendimento.",
  },
  {
    q: "Eu preciso entender de tecnologia ou API?",
    a: "Não. A proposta é mostrar o caminho de forma simples, para você entender a operação e tomar decisões melhores — sem precisar configurar sistemas ou aprender código.",
  },
  {
    q: "Automação não deixa o atendimento frio?",
    a: "O processo cuida do repetitivo e ajuda o lead a chegar organizado à pessoa certa. O humano continua onde acolhimento, conversa, julgamento e negociação realmente importam.",
  },
  {
    q: "A aula promete que meu número nunca será banido?",
    a: "Não. Nenhuma operação pode prometer risco zero. A aula explica práticas, requisitos e infraestrutura que ajudam a reduzir vulnerabilidades e a profissionalizar o canal.",
  },
  {
    q: "Quando será a próxima turma?",
    a: "A nova data e o horário ainda serão confirmados. Esta versão da página está pronta para receber essas informações assim que forem validadas.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          <span className="brand-mark">W</span>
          <span>
            <strong>Weslen Farias</strong>
            <small>Impulsefy</small>
          </span>
        </a>
        <a className="header-link" href="#inscricao">
          Participar da aula <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Aula online ao vivo para médicos donos de clínicas</p>
            <h1>
              O seu anúncio pode estar funcionando.
              <em>E a sua clínica ainda perdendo pacientes.</em>
            </h1>
            <p className="hero-lead">
              Existe um trecho entre o clique e a agenda que quase ninguém acompanha. Descubra onde os leads pelos quais você já pagou estão esfriando — e conheça o caminho para uma operação oficial, organizada e rastreável no WhatsApp.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#inscricao">
                Quero enxergar o que acontece depois do clique
                <span aria-hidden="true">→</span>
              </a>
              <div className="hero-price">
                <span>Investimento</span>
                <strong>R$ 29,90</strong>
              </div>
            </div>
            <div className="hero-meta" aria-label="Informações da aula">
              <span><i aria-hidden="true">●</i> Ao vivo e online</span>
              <span><i aria-hidden="true">●</i> Nova turma em confirmação</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Fluxo do anúncio até o agendamento">
            <div className="visual-topline">
              <span>Rastro do lead</span>
              <span className="live-dot">Ao vivo</span>
            </div>
            <div className="flow-step active">
              <div className="flow-icon">01</div>
              <div><small>Entrada</small><strong>Anúncio funcionou</strong></div>
              <span className="status-ok">✓</span>
            </div>
            <div className="flow-connector"><span /></div>
            <div className="flow-step active">
              <div className="flow-icon">02</div>
              <div><small>Conversa</small><strong>Lead chamou no WhatsApp</strong></div>
              <span className="status-ok">✓</span>
            </div>
            <div className="flow-connector broken"><span /></div>
            <div className="blind-zone">
              <div className="radar-ring"><span>?</span></div>
              <div>
                <small>Ponto cego</small>
                <strong>O que aconteceu aqui?</strong>
                <p>Espera, responsável, qualificação, follow-up...</p>
              </div>
            </div>
            <div className="flow-connector muted"><span /></div>
            <div className="flow-step muted-step">
              <div className="flow-icon">04</div>
              <div><small>Resultado</small><strong>Agenda com buracos</strong></div>
              <span className="status-alert">!</span>
            </div>
            <p className="visual-caption">O anúncio termina no clique. Depois dele, começa outro jogo.</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Experiência de Weslen Farias">
        <div className="container trust-grid">
          <div><strong>≈ 9 anos</strong><span>de mercado</span></div>
          <div><strong>200+ empresas</strong><span>atendidas em software e marketing</span></div>
          <div><strong>R$ 5 milhões+</strong><span>em mídia gerida na fase de agência</span></div>
          <div><strong>MBA</strong><span>em Marketing, Estratégia e Inovação</span></div>
        </div>
      </section>

      <section className="section recognition">
        <div className="container split-heading">
          <div>
            <p className="section-kicker">Reconhece essa cena?</p>
            <h2>Relatório cheio.<br /><span>Agenda com buracos.</span></h2>
          </div>
          <div className="recognition-copy">
            <p>Os anúncios mostram leads. O WhatsApp recebe mensagens. Mas, no fim do dia, a agenda não acompanha o volume que entrou.</p>
            <p>A reação comum é aumentar a verba, cobrar mais da recepção ou culpar o “lead ruim”.</p>
            <p className="callout">Só que mais tráfego não fecha um vazamento.</p>
          </div>
        </div>
        <div className="container blind-grid">
          {blindSpots.map((item) => (
            <article className="blind-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section belief-section">
        <div className="container belief-grid">
          <div className="belief-copy">
            <p className="section-kicker">A algema do WhatsApp</p>
            <h2>Carregar o celular da clínica não é controle.</h2>
            <p>Se você termina um procedimento, abre o WhatsApp e pensa “será que responderam aquele paciente?”, a operação ainda depende dos seus olhos para funcionar.</p>
            <p>Controle de verdade não é possuir o aparelho. É possuir visibilidade.</p>
          </div>
          <div className="belief-comparison">
            <div className="comparison-card old">
              <small>Falsa sensação de controle</small>
              <strong>“Se o celular está comigo, eu sei o que está acontecendo.”</strong>
              <ul>
                <li>Conversas espalhadas</li>
                <li>Follow-up na memória</li>
                <li>Gestão no escuro</li>
              </ul>
            </div>
            <div className="comparison-arrow" aria-hidden="true">→</div>
            <div className="comparison-card new">
              <small>Controle real</small>
              <strong>“Eu consigo seguir o caminho de cada oportunidade.”</strong>
              <ul>
                <li>Responsável definido</li>
                <li>Processo acompanhável</li>
                <li>Gargalos visíveis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section trail-section" id="metodo">
        <div className="container section-intro centered">
          <p className="section-kicker">O mecanismo</p>
          <h2>Protocolo Rastro do Dinheiro</h2>
          <p>Se o dinheiro entrou pelo anúncio, você deveria conseguir seguir as pegadas dele até a agenda.</p>
        </div>
        <div className="container trail-list">
          {trail.map(([title, text], index) => (
            <div className="trail-item" key={title}>
              <span className="trail-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="trail-line"><i /></div>
              <div><strong>{title}</strong><p>{text}</p></div>
              <span className="trail-check">✓</span>
            </div>
          ))}
        </div>
        <div className="container mechanism-note">
          <span className="note-mark">i</span>
          <p><strong>Não é só IA. Não é só CRM. Não é só chatbot.</strong> É um caminho que conecta origem, qualificação, atendimento humano, follow-up e monitoramento.</p>
        </div>
      </section>

      <section className="human-section">
        <div className="container human-grid">
          <div className="human-visual" aria-hidden="true">
            <div className="message patient"><small>Paciente</small><p>Olá, gostaria de saber sobre o procedimento.</p><span>19:08</span></div>
            <div className="wait-pill">40 min sem resposta</div>
            <div className="message process"><small>Processo organizado</small><p>Pedido recebido e direcionado para a pessoa certa.</p><span>19:09 ✓</span></div>
            <div className="human-badge">Humano assume a conversa</div>
          </div>
          <div className="human-copy">
            <p className="section-kicker">Robô frio? Pior é o vácuo.</p>
            <h2>Tecnologia organiza o caminho. <span>Gente cuida de gente.</span></h2>
            <p>Humanização não significa obrigar o paciente a esperar por uma resposta manual.</p>
            <p>O processo cuida do repetitivo. Sua equipe entra onde conversa, acolhimento, julgamento e fechamento realmente importam.</p>
            <a className="text-link" href="#conteudo">Ver o que será ensinado <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="section curriculum" id="conteudo">
        <div className="container section-intro">
          <p className="section-kicker">Conteúdo da aula</p>
          <h2>O mapa para sair do improviso e enxergar sua operação.</h2>
          <p>Uma aula direta para entender o problema, a infraestrutura e o processo — sem transformar o médico em técnico.</p>
        </div>
        <div className="container module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.tag}>
              <span>{module.tag}</span>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
              <i aria-hidden="true">↘</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section expert-section">
        <div className="container expert-grid">
          <div className="expert-card" aria-label="Weslen Farias, Impulsefy">
            <div className="expert-monogram">WF</div>
            <div className="expert-label"><strong>Weslen Farias</strong><span>Founder, Impulsefy</span></div>
            <div className="expert-signal"><span /><span /><span /><span /></div>
          </div>
          <div className="expert-copy">
            <p className="section-kicker">Quem conduz a aula</p>
            <h2>Ele passou anos olhando para o anúncio. Até encontrar o problema depois dele.</h2>
            <p>Weslen Farias trabalhou com marketing, tráfego e operações comerciais. Aumentava campanhas, testava canais e ajudava equipes — mas o crescimento dos leads nem sempre virava crescimento proporcional das vendas.</p>
            <p>O ponto de virada veio ao passar uma semana dentro da operação de um cliente, longe de casa e com o primeiro filho ainda bebê. Ali, enxergou o ponto cego: muitas vezes, o marketing já tinha funcionado. O problema começava depois que a demanda chegava.</p>
            <div className="expert-quote">“Não basta gerar o lead. O dono precisa conseguir enxergar o caminho dele.”</div>
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-grid">
          <div>
            <p className="section-kicker">Para quem é</p>
            <h2>Esta aula faz sentido se você...</h2>
          </div>
          <ul className="fit-list">
            <li><span>✓</span> É médico e dono de uma clínica que já funciona.</li>
            <li><span>✓</span> Investe em anúncios para atrair pacientes.</li>
            <li><span>✓</span> Tem duas ou mais pessoas no atendimento.</li>
            <li><span>✓</span> Não sabe exatamente onde cada lead foi parar.</li>
            <li><span>✓</span> Quer organizar a operação sem culpar ou trocar toda a equipe.</li>
            <li><span>✓</span> Busca reduzir improvisos e operar com mais visibilidade.</li>
          </ul>
        </div>
      </section>

      <section className="section offer-section" id="inscricao">
        <div className="offer-glow" />
        <div className="container offer-grid">
          <div className="offer-copy">
            <p className="section-kicker">WhatsApp Blindado em 72h</p>
            <h2>Antes de comprar mais leads, descubra o que acontece com os que você já compra.</h2>
            <p>Você não precisa sair desta aula sabendo configurar tecnologia. Precisa sair sabendo onde olhar, o que cobrar e qual caminho sua clínica precisa construir.</p>
            <ul>
              <li><span>✓</span> Aula online e ao vivo</li>
              <li><span>✓</span> Conteúdo aplicado a clínicas com equipe</li>
              <li><span>✓</span> Mapa do Rastro do Dinheiro</li>
              <li><span>✓</span> Visão simples da infraestrutura oficial</li>
            </ul>
          </div>
          <div className="price-card" id="checkout">
            <span className="price-label">Ingresso individual</span>
            <div className="price"><small>R$</small><strong>29</strong><sup>,90</sup></div>
            <p>Pagamento único</p>
            <a className="button button-primary full" href="#confirmacao">
              Quero participar da próxima turma <span>→</span>
            </a>
            <div className="date-status"><i /> Nova data e horário em confirmação</div>
            <small className="fine-print">O nome “72h” identifica a aula. Prazos de credenciamento e implementação dependem dos requisitos da clínica e dos processos da plataforma.</small>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2>Decida com clareza.</h2>
            <p>Sem promessa impossível. Sem complicação técnica. Só o que você precisa saber antes de entrar.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>{item.q}<span>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section" id="confirmacao">
        <div className="container final-inner">
          <p className="section-kicker">O anúncio já fez a parte dele.</p>
          <h2>Agora você precisa enxergar o que acontece depois do clique.</h2>
          <p>Seu lucro pode estar no trecho que hoje ninguém acompanha.</p>
          <a className="button button-primary" href="#inscricao">Quero seguir o rastro dos meus leads <span>→</span></a>
          <small>Inscrições da nova turma serão liberadas após a confirmação de data, horário e checkout.</small>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark">W</span>
            <span><strong>Weslen Farias</strong><small>Impulsefy</small></span>
          </a>
          <p>WhatsApp Blindado em 72h · Aula online para operações de clínicas.</p>
          <p>© 2026 Impulsefy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
