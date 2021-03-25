import { useEffect } from 'react'
import Head from 'next/head'

function EmbeddedVideo() {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/utm06w_zkns`}
        frameBorder="0"
      />
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");
    var navcontent = document.getElementById("nav-content");
    var navaction = document.getElementById("navAction");
    var toToggle = document.querySelectorAll(".toggleColour");
    document.addEventListener('scroll', () => {
      console.log('pos', window.scrollY)
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        header.classList.add("bg-dark-green");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-gray-800");
          toToggle[i].classList.remove("text-white");
        }
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      } else {
        header.classList.remove("bg-dark-green");
        //Use to switch toggleColour colours
        for (var i = 0; i < toToggle.length; i++) {
          toToggle[i].classList.add("text-white");
          toToggle[i].classList.remove("text-gray-800");
        }

        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
      }
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
          </div>
          <div className="block lg:hidden pr-4">
           
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="inline-block py-2 px-4 text-gradient font-bold no-underline" href="#">HOME</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gradient no-underline hover:text-gray-800 hover:text-underline py-2 px-4" target="_blank" href="https://instagram.com/michelejimenezoficial">INSTAGRAM</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gradient no-underline hover:text-gray-800 hover:text-underline py-2 px-4" target="_blank" href="https://facebook.com/michelejimenezoficial">FACEBOOK</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-gradient no-underline hover:text-gray-800 hover:text-underline py-2 px-4" target="_blank" href="https://www.youtube.com/channel/UCMuNhfyl22V5wVkG62RdX_A?sub_confirmation=1">YOUTUBE</a>
              </li>
            </ul>
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
                  uma vida cheia de realizações.
                <br />
                <br />
              </p>
                

              <p>PARA INSCRIÇÕES, CLIQUE <a href="https://api.whatsapp.com/send?phone=5512981565612&text=Quero%20fazer%20minha%20INSCRIÇÃO%20no%20ReprogrAME-SE%20Quântico!!"> AQUI, E ME CHAMA NO WHATSAPP!</a> </p>
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
               <EmbeddedVideo />
              </div>
              <p className="w-full text-center text-gray-800 text-base center px-6 mb-5">
                Gostou do vídeo? Assine nosso canal, curta e compartilhe!
              </p>
          </div>
        </div>
      </div>
    </section>
    
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

    {/* <!--Footer--> */}
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              <img className="w-full md:w-1/4 z-50" src="assets/images/logo/mjo-logo.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
