import React, { useState } from 'react';

import Head from 'next/head';

import Config from '../../src/Config';

import Navigation from '../../src/components/navigation';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

import { postStory } from '../../src/utils/Api';

export default () => {
  const [handle, setHandle] = useState('');
  const [isPositiveExperience, setIsPositiveExperience] = useState(null);
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle', handle);
    console.log('isPositiveExperience', isPositiveExperience);
    console.log('content', content);
    if (isPositiveExperience === null) {
      return;
    }
    if (content.length === 0) {
      return;
    }

    const json = await postStory({
      handle,
      isPositiveExperience,
      content,
    });
    console.log('json', json);
  };
  return (
    <>
      <Head>
        <title>Ajouter mon expérience</title>
      </Head>
      <Navigation />
      <Header
        isBackground={false}
        isPost={false}
        content={'Ajouter mon expérience'}
      />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="experience">Experience type</label>
                  <div className="checkbox">
                    <input
                      type="radio"
                      name="experience"
                      value="true"
                      checked={isPositiveExperience === true}
                      onChange={(e) => {
                        // console.log('e.target.value', e.target.value);
                        setIsPositiveExperience(e.target.value === 'true');
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
                        // console.log('e.target.value', typeof e.target.value);
                        setIsPositiveExperience(!e.target.value === 'false');
                      }}
                    />
                    Négative
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
                    placeholder="Mon expérience dans la tech est la suivante..."
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
                  <label htmlFor="handle">Name (optional)</label>
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
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
