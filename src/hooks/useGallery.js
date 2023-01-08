import { useStaticQuery, graphql } from "gatsby"

const useGallery = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "content" } }
        ) {
          nodes {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `);
  
    return data.allFile.nodes.map(node => ({
      ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
      id: node.id,
    }));
  };
  
  export default useGallery;
