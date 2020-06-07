import { GetStaticProps } from 'next';

import Head from 'next/head';

import Config from '../src/Config';

import Navigation from '../src/components/navigation';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import { UserRow, UserData } from '../src/components/user';

import { getHighlightedStories, getWhitelists } from '../src/utils/Api';

export const getStaticProps: GetStaticProps = async (context) => {
  // const stories = await getStories();
  const whitelist = await getWhitelists();
  const highlightedStories = await getHighlightedStories();

  // console.log('highlightedStories', highlightedStories);

  return {
    props: {
      highlightedStories,
      whitelist,
    },
  };
};

const renderUsersRows = (users) => {
  return users.map((user, i) => {
    const { username, image, content, link } = user;
    return (
      <UserRow
        key={i}
        username={username}
        image={image}
        content={content}
        link={link}
      />
    );
  });
};

export default ({ highlightedStories = [], whitelist = [] }) => {
  return (
    <>
      <Head>
        <title>Ajouter mon expérience</title>
      </Head>
      <Navigation />
      <Header stories={highlightedStories} whitelist={whitelist} />
      <main>
        <div className="container">
          <article className="row">
            <div className="col-12">
              <h2>Qu'est-ce que My life in tech ?</h2>
              <p>
                My life in tech est un projet bénévole qui a pour but d'éclairer
                à travers des témoignages sur la situation de la tech en France.
                Des témoignages sur les bonnes choses comme les mauvaises qui
                peuvent arriver aux minorités dans la tech.
              </p>
            </div>
          </article>
          <article className="row">
            <div className="col-12">
              <h2>A qui s'adresse ce site ?</h2>
              <p>
                My life in tech s'adresse à toutes les personnes désireuse de
                voir plus loin que les discours classiques sur la tech.
              </p>
              <ul>
                <li>
                  Si vous êtes étudiant.e.s dans le domaine et vous demandez
                  comment ça peut se passer,
                </li>
                <li>
                  Ou si vous êtes déjà dans le métier et voulez voir comment ça
                  se passe pour les autres,
                </li>
                <li>
                  Enfin, si vous êtes décideu.r.se dans la tech et voulez voir
                  ce que pense les salariés.
                </li>
              </ul>
            </div>
          </article>
          <article className="row">
            <div className="col-12">
              <h2>Qui sont nos contributeurs ?</h2>
              <p>
                Ce site est créé par le collectif Social Hackeur. Le site est
                hébergé bénévolement par des développeurs web. Nous espérons que
                son contenu vous est utile.
              </p>
              <div className="col-6 offset-3">{renderUsersRows(UserData)}</div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};
