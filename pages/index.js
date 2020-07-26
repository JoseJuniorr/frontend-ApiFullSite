import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Menu from '../components/Menu';

import { Jumbotron, Container } from 'reactstrap'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faLightbulb } from '@fortawesome/free-solid-svg-icons';
library.add(faServer, faLightbulb);





function Home(props) {
    return (<div>
        <Head>
            <title>Home - NEXT-IT</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site feito com next js para estudos" />
        </Head>
        <Menu />
        <Jumbotron fluid className="custom-top">
            <style>
                {
                    `
                    .custom-top{
                        background-image: url(/topo_home.jpg) ;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        
                        padding-top: 150px;
                        padding-bottom: 150px;
                        color: #fff;
                        text-align: left;
                    }
                    `
                }
            </style>
            <Container>
                <h1 className="display-4">The future of IT</h1>
                <p className="lead mb-4">Companies are rushing to be more agile, more collaborative, and meet customer expectations dynamically. <br /> The opportunity for IT is to be at the center of the story.</p>
                <Link href="/contato"><a className="btn btn-lg btn-outline-light">Entrar em Contato</a></Link>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="servicos">
            <style>
                {`
                   .icone{
                   
                }
                
                `}
            </style>

            <Container>
                <div className="row featurette">
                    <div className="col-md-6">
                        <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-6">
                        <style>
                            {`
                            .circulo-serv{
                                width: 110px;
                                height: 110px;
                                
                                padding-top: 12 px;
                                background-color: gray;
                                border-radius: 250px;
                                font-size: 3rem;
                                color: #fff;           
                            }
                            `}
                        </style>
                        <div className="row circulo-serv ">

                        </div>
                    </div>
                </div>
            </Container>
        </Jumbotron>





    </div>)
}

export default Home