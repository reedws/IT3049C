import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: require('../../static/img/home/undraw_static_assets_rpm6.svg').default,
    description: (
      <>
        We'll learn Client-side development using JavaScript, HTML, and CSS.
      </>
    ),
  },
  {
    title: 'Game Development',
    Svg: require('../../static/img/home/undraw_game_world_-0-o6q.svg').default,
    description: (
      <>
        We;ll learn web development practices in the context of playing games
      </>
    ),
  },
  {
    title: 'Development Best Practices',
    Svg: require('../../static/img/home/undraw_dev_productivity_umsq.svg').default,
    description: (
      <>
        We'll learn clean code practices, code reviews, and industry best practices.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
