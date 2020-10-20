<h2 align="center">My Portfolio</h2>

<p>demo : https://regiscode.netlify.app/</p>

## 🌱 Build Notes

- Gatsby clean && gatsby build
- drag and drop public folder to netlify deploy section

#### 🍃 work is online

1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] :https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.
6. In order to follow along with the tutoriel video, you can use john smilga's backend (url below)

   [strapi backend]:https://github.com/john-smilga/strapi-gatsby-porfolio-2020-api

7. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
### Inspired by **_john-smilga_** work

==Licensed under the MIT License, Copyright © 2020 [regisnut](https://github.com/regisnut).==
