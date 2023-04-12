import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Follow The Pattern MVC2',
    Svg: require('@site/static/img/mvc.svg').default,
    description: (
      <>
        SwiftServe make your application follows MVC2 pattern.
      </>
    ),
  },
  {
    title: 'Fast and Simple',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        SwiftServe lets you focus on your logic business, and we&apos;ll do the chores. Go
        ahead and start build web application in java in simple way.
      </>
    ),
  },
  {
    title: 'Automatic REST APIs Creation',
    Svg: require('@site/static/img/apilogo.svg').default,
    description: (
      <>
        With SwiftServe you can create REST APIs only with models.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
