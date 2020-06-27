import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Config from '../../src/Config';

import Navigation from '../../src/components/navigation';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import { postStory } from '../../src/utils/Api';

const ErrorAlert = ({ text = '' }) => {
  console.log('ErrorAlert text', text);
  return (
    <div className="row">
      <div className="col-12">
        <div className="alert-error">{text.toString()}</div>
      </div>
    </div>
  );
};

export default () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [handle, setHandle] = useState('');
  const [isPositiveExperience, setIsPositiveExperience] = useState(true);
  const [content, setContent] = useState('');
  const [caracteristic, setCaracteristic] = useState('');
  const [tagLine, setTagLine] = useState(
    `Je suis ${
      caracteristic === '' && '<caractéristique>'
    } et j'ai été vu(e) comme une personne quand...`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('handle', handle);
    // console.log('isPositiveExperience', isPositiveExperience);
    // console.log('content', content);
    if (isPositiveExperience === null) {
      setError(
        "Il est obligatoire de mettre si l'expérience était positive ou négative"
      );
      return;
    }
    if (caracteristic === '') {
      setError('Il est obligatoire de mettre votre caractéristique');
      return;
    }
    if (content.length <= 100) {
      setError(
        "Il est obligatoire de mettre d'écrire une expérience de plus de 100 caractères"
      );
      return;
    }

    const json = await postStory({
      handle,
      isPositiveExperience,
      content: tagLine + '\n' + content,
    });

    if (json.hasOwnProperty('_id') === true) {
      router.push('/');
    } else {
      if (json.hasOwnProperty('error') === true) {
        console.log('json.error', json.error);
        setError(json.error);
      } else {
        setError('Une erreur est survenue. Veuillez essayer plus tard');
      }
    }
    // console.log('json', json);
  };
  return (
    <>
      <Head>
        <title>Ajouter mon expérience</title>
      </Head>
      <Navigation />
      <Header
        isBackground={false}
        isStory={false}
        content={'Ajouter mon expérience'}
      />
      <main>
        <div className="container">
          {error !== '' && <ErrorAlert text={error} />}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="experience">
                    Comment était votre expérience ?
                  </label>
                  <div className="checkbox">
                    <input
                      type="radio"
                      name="experience"
                      value="true"
                      checked={isPositiveExperience === true}
                      onChange={(e) => {
                        console.log('e.target.value', e.target.value);
                        setIsPositiveExperience(true);
                        setTagLine(
                          `Je suis ${
                            caracteristic === '' && '<caractéristique>'
                          } et j'ai été vu(e) comme une personne quand...`
                        );
                      }}
                    />
                    Positive
                  </div>
                  <div className="checkbox">
                    <input
                      type="radio"
                      name="experience"
                      value="false"
                      checked={isPositiveExperience === false}
                      onChange={(e) => {
                        console.log('e.target.value', e.target.value);
                        setIsPositiveExperience(false);
                        setTagLine(
                          `Je suis ${
                            caracteristic === '' && '<caractéristique>'
                          } et j'ai été réduit(e) à cette caractéristique quand...`
                        );
                      }}
                    />
                    Négative
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="caracteristic">
                    De quelle caractéristique souhaitez-vous parler ?
                  </label>
                  <div className="input">
                    Je suis{' '}
                    <input
                      type="text"
                      name="caracteristic"
                      value={caracteristic}
                      placeholder={'Une femme, homosexuel.le, étranger.e'}
                      onChange={(e) => {
                        // console.log('e.target.value', e.target.value);
                        setCaracteristic(e.target.value);
                        setTagLine(
                          isPositiveExperience
                            ? `Je suis ${e.target.value} et j'ai été vu(e) comme une personne quand...`
                            : `Je suis ${e.target.value} et j'ai été réduit(e) à cette caractéristique quand...`
                        );
                      }}
                    />
                    <small>
                      Les{' '}
                      <a
                        href="https://fr.wikipedia.org/wiki/Intersectionnalit%C3%A9"
                        target="_blank"
                      >
                        intersectionnalités
                      </a>{' '}
                      sont les bienvenues
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">
                    Racontez votre expérience (600 caractères) :
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    maxLength={600}
                    placeholder={tagLine}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    value={content}
                  ></textarea>
                  {/* <small>
                    Max characters: <span></span>
                  </small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="handle">
                    Votre pseudonyme (facultatif) :
                  </label>
                  <input
                    type="text"
                    id="handle"
                    name="handle"
                    value={handle}
                    onChange={(e) => {
                      setHandle(e.target.value);
                    }}
                  />
                </div>
                <div className="button">
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
          {error !== '' && <ErrorAlert text={error} />}
        </div>
      </main>
      <Footer />
    </>
  );
};
