import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      console.log('pos', window.scrollY)
    })
  }, [])

  return (
    <>
       <Head>
        <title>Michele Jimenez</title>
        <meta
          name="Description"
          content="Michele Jimenez - Ativista Quântica, Terapeuta Holistica e Ocupacional."
        />
      </Head>
      {/* <!--Nav--> */}
      <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            {/* <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#"> */}
              {/* <!--Icon from: http://www.potlabicons.com/ --> */}
              {/* <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg> */}
              {/* MICHELE JIMENEZ */}
            {/* </a> */}
          </div>
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">HOME</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="https://instagram.com/michelejimenezoficial">INSTAGRAM</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="https://facebook.com/michelejimenezoficial">FACEBOOK</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="https://www.youtube.com/channel/UCMuNhfyl22V5wVkG62RdX_A?sub_confirmation=1">YOUTUBE</a>
              </li>
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Trilogia Do Novo Eu
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
       {/* <!--Hero--> */}
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            {/* <p className="uppercase tracking-loose w-full">Olá, seja bem vindo, eu sou a</p> */}
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Michele Jimenez!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Ativista Quântica, HoloCocriadora, Terapeuta Holística, Quântica e Ocupacional,
              mais de 20 anos atuante e militante da saúde mental, pesquisadora docomportamento
              humano, desenvolvimento pessoal, comportamental e realização pessoal.!
            </p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Trilogia do Novo Eu - Quero Participar
            </button>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/4 z-50" src="assets/images/mj/michelejimenez4.png" />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Eventos
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Trilogia do Novo Eu
            </h3>
            <p className="text-gray-600 mb-8">
                DESCUBRA NESTAS 3 MASTER CLASS COMO A SUA MENTE E SUAS CRENÇAS TE IMPEDEM DE EXPANDIR
                A SUA CONSCIÊNCIA,  E ENTENDA O PODER QUE VOCÊ TEM DE COCRIAR SUA REALIDADE, A VIDA
                PROSPERA QUE VOCÊ DESEJA.
                <br />
                <p>EVENTO 100% ON-LINE E GRATUITO</p>
              <br />

              Clique Aqui para

              <a className="text-pink-500 underline" href="https://michelejimenez.com.br/trilogia-do-novo-eu"> Participar </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
              <img className="w-full md:w-4/4 z-50" src="assets/images/logo/trilogiaDoNovoEu/trilogiaDoNovoEu01.png" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img className="w-full md:w-4/4 z-50" src="assets/images/logo/reprogrameseQuantico/reprogramesequantico02.png" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
               Reprograme-se Quântico
              </h3>
              <p className="text-gray-600 mb-8">
                  Esse Treinamento foi criado para que você desconstrua seu VELHO EU, desinstalando da sua mente o que te aprisiona na
                  escassez e nas energias de baixa vibração. Eu vou te ensinar a eliminar todas as crenças e paradigmas que vivem no seu
                  inconsciente te sabotando, dificultando sua evolução e impedindo a expansão da sua consciência para uma nova realidade,
                  uma vida cheia de realizações.                <br />
                <br />
                

                <p>PARA INSCRIÇÕES, CLIQUE <a href="https://api.whatsapp.com/send?phone=5512981565612&text=Quero%20fazer%20minha%20INSCRIÇÃO%20no%20ReprogrAME-SE%20Quântico!!"> AQUI, E ME CHAMA NO WHATSAPP!</a> </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Youtube
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>


        <div className="w-full md:w-4/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                  <iframe className="w-full p-6" height='450'  src="https://www.youtube.com/embed/utm06w_zkns"
                    title="UNIVERSO DEVOLVE | MICHELE JIMENEZ"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  </iframe>
              </div>
              <p className="w-full text-center text-gray-800 text-base center px-6 mb-5">
                Gostou do vídeo? Assine nosso canal, curta e compartilhe!
              </p>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Pricing
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Free
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £0
                <span className="text-base">for one user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
              <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-4xl font-bold text-center">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                Pro
              </div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
    <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g className="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section className="container mx-auto text-center py-6 mb-12">
      {/* <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black">
       Inscrever
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Main Hero Message to sell yourself!
      </h3>
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Action!
      </button> */}
    </section>
    {/* <!--Footer--> */}
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              <img className="w-full md:w-1/4 z-50" src="assets/images/logo/mjo-logo.png" />
            </a>
          </div>
          {/* <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <a href="https://www.freepik.com/free-photos-vectors/background" className="text-gray-500">Background vector created by freepik - www.freepik.com</a>
    </footer>
    </>
  )
}
