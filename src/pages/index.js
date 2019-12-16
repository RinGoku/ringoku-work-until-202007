import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/coopet.png'
import thumb02 from '../assets/images/thumbs/helloworld.png'
import thumb03 from '../assets/images/thumbs/charisma.png'

import full03 from '../assets/images/fulls/03.jpg'
import { withPrefix } from "gatsby";
import { Link, graphql } from "gatsby"

import '../css/index.scss';

const DEFAULT_IMAGES = [
    { id: '1', source: thumb01, thumbnail: thumb01, caption: 'Coopet', description: 'ペットでつながるSNSです', url: "https://coopet-51a0b.web.app/"},
    { id: '2', source: thumb02, thumbnail: thumb02, caption: 'Hello, World!公式ページ', description: '同人ゲームサークル「Hello, World!」の公式ホームページです', url: "https://hello-world.site/"},
    { id: '3', source: thumb03, thumbnail: thumb03, caption: 'カリスマを取り戻せ', description: '2019年5月5日(日)開催の 第十六回 博麗神社例大祭に出品した同人2D縦スクロールシューティングゲーム', url: "https://ringoku98.thebase.in/items/24584354"},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Yuta Sakou(RinGoku) Work"
        const siteDescription = "ITエンジニアとして活動している酒向祐太(りんごく)の活動についてのサイトです"
        const data = this.props.data;
        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <script>{`if (window.netlifyIdentity) {
                            window.netlifyIdentity.on("init", user => {
                            if (!user) {
                                window.netlifyIdentity.on("login", () => {
                                document.location.href = "/admin/";
                                });
                            }
                            });
                        }`}</script>
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h2>Recent Blog　<Link to="/about/">more</Link></h2>
                        <div className="posts">
                            {data.allMarkdownRemark.edges.map(({node}) => (
                                <Link to="detail" key={node.id} className="post-link 6u 12u$(xsmall)" state={{ node: node }}>
                                    <img src={node.frontmatter.featuredImage} className="post-image" />
                                    <h3>{node.frontmatter.title}</h3>
                                    <span>
                                        {node.frontmatter.date}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, url }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url
                        }))} />
                    </section>

                    {/* <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}

                </div>

            </Layout>
        )
    }
}

export default HomeIndex

export const query = graphql`
query {
  allMarkdownRemark(
    limit: 4
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          tags
          featuredImage
        }
        excerpt
      }
    }
  }
}
`