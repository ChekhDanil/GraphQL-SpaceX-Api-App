import {gql} from "apollo-boost";

const GET_LAUNCHES = gql`
  {
   launchesPast(limit: 10) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
export default GET_LAUNCHES