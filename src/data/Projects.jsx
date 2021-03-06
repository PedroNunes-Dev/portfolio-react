import developer from '../assets/images/Developer.png'
import rusch from '../assets/images/rusch.png'
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr';
const projects = [

    {
        image: "https://user-images.githubusercontent.com/81447137/137406478-2ad35460-6d14-4d31-b2c9-96d51b9a8ee1.jpg",
        technologies: [<FaIcons.FaHtml5/>, <FaIcons.FaCss3Alt/>, <FaIcons.FaJs/>, <FaIcons.FaBootstrap/>],
        githublink: "https://github.com/PedroNunes-Dev/nonotransportes",
        deploylink: "https://nonotransporteselocacoes.com.br/",
        description: "Projeto criado para uma empresa no ramo de locação de equipamentos e serviços."
    },
    {
        image: rusch,
        technologies: [<FaIcons.FaHtml5/>, <FaIcons.FaJs/>, <FaIcons.FaCss3Alt/>, <FaIcons.FaBootstrap/>],
        githublink: "https://github.com/PedroNunes-Dev/rusch",
        deploylink: "https://ruschconstrucoes.com.br",
        description: "Trabalho profissional realizado como freelancer, para um cliente no ramo de locaçoes de máquinas e equipamentos."
    },
    {
        image: "https://github.com/PedroNunes-Dev/registro-usuario-react/raw/main/public/screenshot-crud.png",
        technologies: [<FaIcons.FaJs/>, <FaIcons.FaCss3Alt/>, <FaIcons.FaReact/>],
        githublink: "https://github.com/PedroNunes-Dev/registro-usuario-react",
        deploylink: "https://pedronunes-dev.github.io/registro-usuario-react/",
        description: "Projeto criado durante o curso de ReactJs, ministrado por Leonardo Moura Leitão do Curso Web Moderno Completo."
    },
    {
        image: "https://github.com/PedroNunes-Dev/react-api-filmes/raw/main/src/images/React-Api-filmes.gif",
        technologies: [<FaIcons.FaJs/>, <FaIcons.FaCss3Alt/>, <FaIcons.FaReact/>],
        githublink: "https://github.com/PedroNunes-Dev/react-api-filmes",
        deploylink: "https://github.com/PedroNunes-Dev/react-api-filmes",
        description: "Projeto criado durante o curso de ReactJs, ministrado por Leonardo Moura Leitão do Curso Web Moderno CompletoEste projeto pequeno foi o primeiro feito com React, para aprendizado e conhecimento da biblioteca."
    },
    {
        image: "https://github.com/PedroNunes-Dev/app_lista_de_tarefas/blob/main/img/home_app_lista_de_tarefa.jpg?raw=true",
        technologies: [<FaIcons.FaPhp/>, <FaIcons.FaCss3Alt/>],
        githublink: "https://github.com/PedroNunes-Dev/app_lista_de_tarefas",
        deploylink: "http://applistatarefa2.epizy.com/?i=1",
        description: "Aplicativo Desenvolvido em PHP durante o Curso Desenvolvimento WEB Completo ministrado por Jorge Sant Ana."
    },
    {
        image: developer,
        technologies: [<FaIcons.FaHtml5/>, '  ', <FaIcons.FaJs/>, '  ', <FaIcons.FaBootstrap/>, '  ', <FaIcons.FaPhp/>, '  ', <FaIcons.FaCss3Alt/>, '  ', <FaIcons.FaReact/>, '  ', <GrIcons.GrMysql/>],
        githublink: "https://github.com/PedroNunes-Dev",
        deploylink: "https://portfoliopedrodev.netlify.app/",
        description: "Procurando novos desafios, se você tem um projeto em mente, estou pronto para te ajudar e juntos vamos construí-lo."
    }

]

export default projects