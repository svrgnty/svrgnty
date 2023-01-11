import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'
import Card from "../components/card";
import Layout from "../components/layout";
import Hero from '../components/layout/hero';
import Breadcrumbs from '../components/layout/breadcrumbs';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faCircle, fab, fas);

export default function Template({data}) {
  const {resourcesJson: pages} = data;
  const {allResourcesJson: categories} = data;

  var desc, updated = '';

  if (pages.description !== null) {
    desc = <p className="description">{pages.description}</p>;
  }

  if (pages.lastUpdate !== null) {
    updated = <p className="updated"> Last Updated: {pages.lastUpdate}</p>;
  }

  const url = `https://svrgnty.com${pages.page}`;
  const title = `${pages.title} | Bitcoin Resources | Svrgnty.com`;

  return (

    <Layout>
    <Helmet 
      title={ title }
      meta={[
        { name: 'description', content: `${pages.lead}` },
        { name: 'og:title', content: title },
        { name: 'twitter:title', content: title },
        { name: 'og:description', content: `${pages.lead}` },
        { name: 'twitter:description', content: `${pages.lead}` },
        { name: 'og:url', content: url },
      ]}
      link={[
        { rel: 'canonical', href: url },
      ]}
    />
    <div>
      <Hero title={pages.title} />
      <Breadcrumbs title={pages.title} />
      <div className="main">
        <div className="contain">
          <div className="page-content">
          <p className="lead">{pages.lead}</p>
          {desc}
            <ul className={"wrapper "+pages.cardType}>
              {pages.links.map((node, key) => (
                <li key={key}>
                  <Card
                  card={node}
                  class={pages.cardType}
                  />
                </li>
              ))}
            </ul>
          {updated}
          </div>
        </div>
      </div>
      <div className="main complimentary">
        <div className="contain">
          <div className="page-content">
            <p className="lead">Continue exploring the Bitcoin resources.</p>
            <ul className="wrapper">
              {categories.edges.map((node, i) => (
                <li key={node.node.id}>
                  <Button url={node.node.page} className="home-button-compact">
                    <FontAwesomeIcon icon={[node.node.iconPrefix, node.node.icon]} size="2x" className="fa-fw" />
                    <div>
                      <h2>{node.node.title}</h2>
                      <p>{node.node.lead}</p>
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
};

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    resourcesJson (page: {eq :$path}) {
      page
      title
      lead
      description
      cardType
      lastUpdate
      ...Card_details
    }
    allResourcesJson(sort: { position: ASC }) {
      edges {
        node {
          id
          position
          page
          title
          lead
          icon
          iconPrefix
        }
      }
    }
  }
`