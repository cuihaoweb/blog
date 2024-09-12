import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    to?: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'ch个人简历',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                ch的个人简历，包含个人基本信息、技能、项目经验等。
            </>
        ),
        to: 'https://www.chdl.fun'
    },
    {
        title: 'toolkit工具箱',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                toolkit工具箱, 包含一些常用的小工具, json格式化、文本比对。
            </>
        ),
        to: 'https://tk.chdl.fun'
    }
];

function Feature({title, Svg, to, description}: FeatureItem) {
    return (
        <Link to={to} className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row" style={{justifyContent: 'center'}}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
