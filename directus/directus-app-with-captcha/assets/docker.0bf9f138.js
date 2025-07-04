import{a as l,o as r,b as c,w as o,h as s,E as e}from"./runtime-core.esm-bundler.15edf3c4.js";const i=s("div",{class:"markdown-body"},[s("p",null,[e("Directus is published to both "),s("a",{href:"https://hub.docker.com/r/directus/directus",target:"_blank",rel:"noopener noreferrer"},"Docker Hub"),e(" and "),s("a",{href:"https://github.com/directus/directus/pkgs/container/directus",target:"_blank",rel:"noopener noreferrer"},"GitHub Packages"),e(" under "),s("code",null,"directus/directus"),e(". To use the latest Directus image from Docker Hub, run:")]),s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"hljs-comment"},"# Make sure to change sensitive values (KEY, SECRET, ...) in production"),e(`
docker run \\
  -p 8055:8055 \\
  -e KEY=255d861b-5ea1-5996-9aa3-922530ec40b1 \\
  -e SECRET=6116487b-cda1-52c2-b5b5-c8022c45e263 \\
  directus/directus
`)])]),s("h3",{id:"installing-specific-versions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installing-specific-versions"},"#"),e(" Installing Specific Versions")]),s("p",null,"To stick to a more specific version of Directus you can use one of the following tags:"),s("ul",null,[s("li",null,[e("Full version, e.g. "),s("code",null,"9.0.0")]),s("li",null,[e("Minor releases, e.g. "),s("code",null,"9.0")]),s("li",null,[e("Major releases, e.g. "),s("code",null,"9")])]),s("p",null,"To use a specific version of Directus, run:"),s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"hljs-comment"},"# Make sure to change sensitive values (KEY, SECRET, ...) in production"),e(`
docker run \\
  -p 8055:8055 \\
  -e KEY=255d861b-5ea1-5996-9aa3-922530ec40b1 \\
  -e SECRET=6116487b-cda1-52c2-b5b5-c8022c45e263 \\
  directus/directus:9.0.0
`)])]),s("h3",{id:"configure-admin-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configure-admin-user"},"#"),e(" Configure Admin User")]),s("p",null,"The published Docker image will automatically populate the database and create an admin user. To configure the email/password for this first user, pass the following env vars:"),s("pre",null,[s("code",{class:"language-bash"},[e("ADMIN_EMAIL="),s("span",{class:"hljs-string"},'"admin@example.com"'),e(`
ADMIN_PASSWORD=`),s("span",{class:"hljs-string"},'"d1r3ctu5"'),e(`
`)])]),s("h2",{id:"persistence",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#persistence"},"#"),e(" Persistence")]),s("p",null,[e("Containers are ephemeral, and this means that whenever you stop a container, all the data associated with it is going to be removed "),s("a",{href:"https://docs.docker.com/storage",target:"_blank",rel:"noopener noreferrer"},"unless you persist them"),e(" when creating your container.")]),s("p",null,[e("Directus image by default "),s("a",{href:"https://github.com/directus/directus/blob/main/docker/Dockerfile#L56-L60",target:"_blank",rel:"noopener noreferrer"},"will use the following locations"),e(" for data persistence (note that these can be changed through environment variables)")]),s("ul",null,[s("li",null,[s("code",null,"/directus/uploads"),e(" for uploads")]),s("li",null,[s("code",null,"/directus/database"),e(" (only when using SQLite and not configured to a different folder)")]),s("li",null,[s("code",null,"/directus/extensions"),e(" for loading extensions")])]),s("h2",{id:"docker-compose",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-compose"},"#"),e(" Docker Compose")]),s("p",null,[e("When using Docker Compose, you can use the following setup to get you started - make sure to change all sensitive values ("),s("code",null,"SECRET"),e(", "),s("code",null,"DB_PASSWORD"),e(", \u2026) in production:")]),s("pre",null,[s("code",{class:"language-yaml"},[s("span",{class:"hljs-attr"},"version:"),e(),s("span",{class:"hljs-string"},"'3'"),e(`
`),s("span",{class:"hljs-attr"},"services:"),e(`
  `),s("span",{class:"hljs-attr"},"database:"),e(`
    `),s("span",{class:"hljs-attr"},"container_name:"),e(),s("span",{class:"hljs-string"},"database"),e(`
    `),s("span",{class:"hljs-attr"},"image:"),e(),s("span",{class:"hljs-string"},"postgis/postgis:13-master"),e(`
    `),s("span",{class:"hljs-attr"},"volumes:"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"./data/database:/var/lib/postgresql/data"),e(`
    `),s("span",{class:"hljs-attr"},"networks:"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"directus"),e(`
    `),s("span",{class:"hljs-attr"},"environment:"),e(`
      `),s("span",{class:"hljs-attr"},"POSTGRES_USER:"),e(),s("span",{class:"hljs-string"},"'directus'"),e(`
      `),s("span",{class:"hljs-attr"},"POSTGRES_PASSWORD:"),e(),s("span",{class:"hljs-string"},"'directus'"),e(`
      `),s("span",{class:"hljs-attr"},"POSTGRES_DB:"),e(),s("span",{class:"hljs-string"},"'directus'"),e(`

  `),s("span",{class:"hljs-attr"},"cache:"),e(`
    `),s("span",{class:"hljs-attr"},"container_name:"),e(),s("span",{class:"hljs-string"},"cache"),e(`
    `),s("span",{class:"hljs-attr"},"image:"),e(),s("span",{class:"hljs-string"},"redis:6"),e(`
    `),s("span",{class:"hljs-attr"},"networks:"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"directus"),e(`

  `),s("span",{class:"hljs-attr"},"directus:"),e(`
    `),s("span",{class:"hljs-attr"},"container_name:"),e(),s("span",{class:"hljs-string"},"directus"),e(`
    `),s("span",{class:"hljs-attr"},"image:"),e(),s("span",{class:"hljs-string"},"directus/directus:latest"),e(`
    `),s("span",{class:"hljs-attr"},"ports:"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-number"},"8055"),s("span",{class:"hljs-string"},":8055"),e(`
    `),s("span",{class:"hljs-attr"},"volumes:"),e(`
      `),s("span",{class:"hljs-comment"},"# By default, uploads are stored in /directus/uploads"),e(`
      `),s("span",{class:"hljs-comment"},"# Always make sure your volumes matches the storage root when using"),e(`
      `),s("span",{class:"hljs-comment"},"# local driver"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"./uploads:/directus/uploads"),e(`
      `),s("span",{class:"hljs-comment"},"# Make sure to also mount the volume when using SQLite"),e(`
      `),s("span",{class:"hljs-comment"},"# - ./database:/directus/database"),e(`
      `),s("span",{class:"hljs-comment"},"# If you want to load extensions from the host"),e(`
      `),s("span",{class:"hljs-comment"},"# - ./extensions:/directus/extensions"),e(`
    `),s("span",{class:"hljs-attr"},"networks:"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"directus"),e(`
    `),s("span",{class:"hljs-attr"},"depends_on:"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"cache"),e(`
      `),s("span",{class:"hljs-bullet"},"-"),e(),s("span",{class:"hljs-string"},"database"),e(`
    `),s("span",{class:"hljs-attr"},"environment:"),e(`
      `),s("span",{class:"hljs-attr"},"KEY:"),e(),s("span",{class:"hljs-string"},"'255d861b-5ea1-5996-9aa3-922530ec40b1'"),e(`
      `),s("span",{class:"hljs-attr"},"SECRET:"),e(),s("span",{class:"hljs-string"},"'6116487b-cda1-52c2-b5b5-c8022c45e263'"),e(`

      `),s("span",{class:"hljs-attr"},"DB_CLIENT:"),e(),s("span",{class:"hljs-string"},"'pg'"),e(`
      `),s("span",{class:"hljs-attr"},"DB_HOST:"),e(),s("span",{class:"hljs-string"},"'database'"),e(`
      `),s("span",{class:"hljs-attr"},"DB_PORT:"),e(),s("span",{class:"hljs-string"},"'5432'"),e(`
      `),s("span",{class:"hljs-attr"},"DB_DATABASE:"),e(),s("span",{class:"hljs-string"},"'directus'"),e(`
      `),s("span",{class:"hljs-attr"},"DB_USER:"),e(),s("span",{class:"hljs-string"},"'directus'"),e(`
      `),s("span",{class:"hljs-attr"},"DB_PASSWORD:"),e(),s("span",{class:"hljs-string"},"'directus'"),e(`

      `),s("span",{class:"hljs-attr"},"CACHE_ENABLED:"),e(),s("span",{class:"hljs-string"},"'true'"),e(`
      `),s("span",{class:"hljs-attr"},"CACHE_STORE:"),e(),s("span",{class:"hljs-string"},"'redis'"),e(`
      `),s("span",{class:"hljs-attr"},"CACHE_REDIS:"),e(),s("span",{class:"hljs-string"},"'redis://cache:6379'"),e(`

      `),s("span",{class:"hljs-attr"},"ADMIN_EMAIL:"),e(),s("span",{class:"hljs-string"},"'admin@example.com'"),e(`
      `),s("span",{class:"hljs-attr"},"ADMIN_PASSWORD:"),e(),s("span",{class:"hljs-string"},"'d1r3ctu5'"),e(`

      `),s("span",{class:"hljs-comment"},"# Make sure to set this in production"),e(`
      `),s("span",{class:"hljs-comment"},"# (see https://docs.directus.io/self-hosted/config-options#general)"),e(`
      `),s("span",{class:"hljs-comment"},"# PUBLIC_URL: 'https://directus.example.com'"),e(`

`),s("span",{class:"hljs-attr"},"networks:"),e(`
  `),s("span",{class:"hljs-attr"},"directus:"),e(`
`)])]),s("h3",{id:"updating-with-docker-compose",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#updating-with-docker-compose"},"#"),e(" Updating With Docker Compose")]),s("p",null,[e("If you are not using the "),s("code",null,"latest"),e(" tag for the Directus image you need to adjust your "),s("code",null,"docker-compose.yml"),e(" file to increment the tag version number, e.g.:")]),s("pre",null,[s("code",{class:"language-diff"},[s("span",{class:"hljs-deletion"},"-   image: directus/directus:9.0.0-rc.101"),e(`
`),s("span",{class:"hljs-addition"},"+   image: directus/directus:9.0.0"),e(`
`)])]),s("p",null,"You can then issue the following two commands (from your docker-compose root):"),s("pre",null,[s("code",{class:"language-bash"},`docker-compose pull
docker-compose up -d
`)]),s("p",null,"The images will be pulled and the containers recreated. Migrations will happen automatically so once the containers have started you will be on the latest version (or the version you specified)."),s("h2",{id:"supported-databases",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#supported-databases"},"#"),e(" Supported Databases")]),s("p",null,"The Directus Docker Image contains all optional dependencies supported in the API. This means the Docker image can be used with most of the supported databases and storage adapters without having to create a custom image."),s("div",{class:"warning hint"},[s("div",{class:"hint-title"},"OracleDB"),s("p",null,[e("OracleDB\u2019s Node client ("),s("code",null,"node-oracledb"),e(") requires a couple more native dependencies, and specific configurations in order to run. The official Directus Docker image does not include these dependencies. See "),s("a",{href:"https://blogs.oracle.com/opal/dockerfiles-for-node-oracledb-are-easy-and-simple",target:"_blank",rel:"noopener noreferrer"},"https://blogs.oracle.com/opal/dockerfiles-for-node-oracledb-are-easy-and-simple"),e(" for more information on what to include for OracleDB.")])])],-1),m="Installing With Docker",g=!1,j="How to host Directus on Docker.",b="3 min read",f={name:"docker",setup(d,{expose:n}){const a={title:"Installing With Docker",modularExtension:!1,description:"How to host Directus on Docker.",readTime:"3 min read"};return n({frontmatter:a}),(p,h)=>{const t=l("docs-wrapper");return r(),c(t,{frontmatter:a},{default:o(()=>[i]),_:1})}}};export{f as default,j as description,g as modularExtension,b as readTime,m as title};
