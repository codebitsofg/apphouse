export default [
  {
    rectPosition: { top: "10%", left: "-20%" },
    projectName: "Shore Blog",
    mediaPath: "shore",
    repoLink: "https://github.com/soberbat/shoreblog",
    liveLink: "https://polite-florentine-f52a60.netlify.app/",
    techStack: [
      "TypeScript",
      "Strapi CMS",
      "shadcn",
      "Next.js",
      "Tailwindcss",
      "Amazon S3",
    ],
    shortDesc: "A Jamstack Blog powered by Next.js and Strapi CMS",
    mainTakeAway: [
      "Skinshore is a static export of a Next.js blog where performance and SEO optimization is of importance.",
      "Strapi CMS is used as the Headless CMS choice. The images are being served in an S3 bucket for production use.",
      "Dynamic routes are configured and latest features of Next.js App Router is being used.",
      "Shadcn is used for the carousel component to save some time.",
      "Page level SEO optimizations are implemented for higher ranking in the search results.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
        module.exports = () => ({
          upload: {
            config: {
              provider: "aws-s3",
              providerOptions: {
                accessKeyId: env("Access Key ID"),
                secretAccessKey: env("Access Key"),
                region: "eu-central-1",
                params: {
                  ACL: "public-read",
                  Bucket: env("Bucket Name"),
                },
              },
              actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
              },
            },
          },
        });
        
      `,
        text: "The strapi config that saves the images to an S3 Bucket.",
      },
      {
        codeSnippet: `
        export async function generateStaticParams() {
          const entries = await fetchCMSEntries()
          return entries.map((entry) => ({
            slug: entry.attributes.slug,
          }))
        }
        
        export async function generateMetadata(props: PageProps): Promise<Metadata> {
          const { pageData, imgUrl } = await getPageData(props.params.slug)
          return {
            title: "Shore | {pageData?.title}",
            keywords: [''],
            description: pageData?.highlightedParagraph,
            openGraph: { images: imgUrl },
            applicationName: 'Shore',
          }
        }
      `,
        text: "Functions that introduced with Next.js 14. generateStaticParams creates the dynamic routes based on the data entries retrieved from the CMS.",
      },

      {
        codeSnippet: `
        const Home = async () => {
          const entries = await fetchCMSEntries()
          const filterEntries = (filter: EntryCategory) => {
            return entries.filter(({ attributes: { category } }) => category === filter)
          }
        
          return (
            <main>
              <Hero entries={filterEntries(EntryCategory.HERO)} />
              <Divider />
              <PostFlow entries={entries} />
              <Divider />
              <HorizontalFlowRow
                title='Endişe'
                entries={filterEntries(EntryCategory.ENDISE)}
              />
        
              <Carousel text='Trendler' showMoreVisible={true} />
              <Gallery entries={filterEntries(EntryCategory.İÇERİKLER)} />
              <Divider />
              <HorizontalFlowRow
                title='Cilt Türleri'
                entries={filterEntries(EntryCategory.CILTTURU)}
              />
              <Carousel text='İpuçları' showMoreVisible={true} />
              <Divider />
              <AboutUsExplainer />
            </main>
          )
        }
      `,

        text: "Home page with reusable components",
      },
    ],
  },

  {
    rectPosition: { top: "40%", left: "-50%" },
    projectName: "Univversecam",
    mediaPath: "universecam",
    liveLink: "https://unniversecam.beratgenc.live/",
    repoLink: "https://github.com/soberbat/univversecam",
    techStack: [
      "TypeScript",
      "Three.js",
      "Zustand.js",
      "Framer Motion",
      "Next.js",
      "Styled Components",
    ],
    deployment: ["Vercel"],
    shortDesc:
      "A Three.js & Next.js app designed & written with optimal modularity in mind.",
    mainTakeAway: [
      "The application has a sophisticated UI controlled with state saved and managed with <span>React Context</span>. The UI is execution of a complex design featuring implementations of common web app elements such as select menus, carousel slides, and footers. ",
      "A WebGL Typescript class is written to encapsulate and organize logic.",
      "Modularity is carefully conducted in the codebase, there are lots of room for flexibility. React user interface and the scene class updates one another based on user input. With a focus on modularity and synchronization, the application is a good example of modular UI and how it can be matched with immersive web experiences.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
        interface ISkewedContainer<T> {
          children: T ;
          canSelectMultiple?: boolean;
          isActiveSlot?: boolean;
          isChildImage: boolean;
          onClick?: (scene: Scene) => void;
        }
        
        const SkewedContainer = ({
          children,
          onClick,
          canSelectMultiple,
          isActiveSlot,
          isChildImage,
        }: ISkewedContainer) => {
          const [isActive, setisActive] = useState(isActiveSlot);
          const { sceneRef } = useContext(AppContext);
        
          const selectSlot = () => {
            canSelectMultiple && setisActive(!isActive);
            onClick && onClick(sceneRef);
          };
        
          return (
            <Wrapper isActive={isActiveSlot} onClick={selectSlot}>
              <InnerWrapper>
                {isChildImage ? <Image src={children} /> : children}
              </InnerWrapper>
            </Wrapper>
          );
        };
        `,
        text: "The component highlighted above is a highly adaptable one, capable of changing it appearance, and its behaviour based on props, serving as the fundamental component for most buttons within the app",
      },
      {
        codeSnippet: `
        const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
          x.set(-(((activeSlide + 1) * FULL_WIDTH) / SLIDE_COUNT));
          setActiveSlide((activeSlide) =>
            activeSlide < SLIDE_COUNT - 1 ? activeSlide + 1 : activeSlide
          );
      
          !isNavigationActive && setIsFactionSearchVisible(false);
        };
        `,
        text: "Main logic responsible for calculating the transformation of the <span>custom slider</span>. The parameterized numerical constants avoids the usage of magic numbers, for code readability.",
      },
      {
        codeSnippet: `
        loadModels = () => {
          const planets = ["alien", "serenity", "tree", "beta"];
    
          const loader = new GLTFLoader();
      
          const planetLoadMap = planets.map((planet, i) => {
            return new Promise((resolve, reject) => {
              loader.load("/assets/planets/{planet}.glb", (scene) => {
                const planetGroup = this.world.clone();
                planetGroup.userData.planetName = planet;
                planetGroup.position.set(0, 0, 0);
      
                (planetGroup as any).isPlanet = true;
      
                scene.scene.traverse((item) => {
                  item.scale.set(1, 1, 1);
                  item.position.set(0, 0, 0);
                });
      
                planetGroup.add(scene.scene);
                this.planets.push(planetGroup);
                this.scene.add(planetGroup);
                resolve(scene.scene);
              });
            });
          });
      
          return Promise.all(planetLoadMap);
        };
        
        `,
        text: "Function above belongs to the class that renders the 3D Scene. It loads modals in an <span>asynchronous</span> way to ensure that the app is not accessible to the user before all necessary data has loaded.",
      },
      {
        codeSnippet: `
        <PlanetDetailRow data={{ title: "Planet Code", info: "Banu" }} />
        `,
        text: "Yet another example of calling a modular component with props.",
      },
      {
        codeSnippet: `
        export const SliderInnerWrapper = styled(motion.div).attrs({
          transition: {
            ease: "circInOut",
            duration: 1,
          },
        })<ISlideCount>(
          ({ slide }) => css"
            width: ${`slide * 100%`};
            height: 100%;
            pointer-events: none;
          "
        );

        //No animation config is being passed when calling the component.
        <SliderInnerWrapper slide={slide}></SliderInnerWrapper>
        `,
        text: "Above showcases how <span>styled-components and framer-motion</span> can be used together to make sure that our component reads cleaner.",
      },
    ],
  },

  {
    rectPosition: { top: "-30%", left: "0%" },
    projectName: "Task Manager",
    techStack: ["TypeScript", "Next.js", "Docker", "Styled Components"],
    deployment: ["Github Actions", "Google Cloud Run"],
    liveLink: "https://application.taskermanager.site/",
    repoLink: "https://github.com/soberbat/task-manager-frontend",
    mediaPath: "tasker",
    shortDesc: "A Fullstack Task Management App",
    mainTakeAway: [
      "Sesion cookies are being saves to the client from the Nest.js backend API for displaying user specific data ve login functionality.",
      "The UI itself has many examples of modern web components, it includes react written forms components as well as sidebars, topbars, modals, expanding views & hover states.",
      "It showcases <span>client and server</span> communication in a production environment.",
      "App is fully automated with <span>Github Actions Pipelines</span>.",
      "A custom domain is configured both for the backend and the frontend to persist cookie.",
      "Use test@user.com as login email and 1234 as password to test the app.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
      export async function middleware(request: NextRequest, response: NextResponse) {
        const cookie = request.cookies.get("connect.sid");
        const pathName = request.nextUrl.pathname;
      
        if (pathName.startsWith("/enter") || pathName.startsWith("/login")) {
          if (cookie) {
            const destinationUrl = new URL("/", new URL(request.url).origin);
            const response = NextResponse.redirect(destinationUrl);
            return response;
          }
        } else {
          if (!cookie) {
            const destinationUrl = new URL("/enter", new URL(request.url).origin);
            const response = NextResponse.redirect(destinationUrl);
            return response;
          }
        }
      }
      
      export const config = {
        matcher: ["/", "/enter"],
      };
      
      `,
        text: "<span>Middleware</span> that redirects user appropriately based on their authentication status. It reads the cookie and handles the redirecting of the user on the server side.",
      },
      {
        codeSnippet: ` 
      export default {
        withCredentials: true,
        credentials: "include",
        headers: {
          "Origin-Allow-Credentials": true,
          "Access-Control-Allow-Credentials": true,
        },
      };
      
      `,
        text: "The config file that makes it possible to pass the cookie and the authorization headers to the server on the following requests.",
      },
      {
        codeSnippet: `
      <UpdateTaskRow
      src={"status"}
      Updater={<PriorityUpdater updateTask={updateCurrentTask} />}
      taskRowInnerComponent={
        <ColoredCell color={getPriorityColor(priority)}>
          {priority}
        </ColoredCell>
      }
    >
      Priority
    </UpdateTaskRow>

      `,
        text: "An example of calling a modular component that takes components as props to change its style and functionality.",
      },
      {
        codeSnippet: ` 
      export default async function Login(email: string, password: string) {
        try {
          return await axios.post(prodEndpoint, { email, password }, axiosConfig);
        } catch (error) {
          return { status: 401 };
        }
      }      
      `,
        text: "Function that makes the actual <span>login request</span> to the server.",
      },
    ],
  },

  {
    rectPosition: { top: "10%", left: "40%" },
    projectName: "PATI",
    techStack: ["TypeScript", "Next.js", "Axios", "Tailwind CSS"],
    deployment: [
      "AWS Lambda",
      "S3 Static Site Deployment",
      "AWS CDK",
      "DynamoDB",
      "SQS",
    ],
    liveLink:
      "http://infrastructurestack-nextjssitebucketbd1a5941-isspgruxxmoy.s3-website.eu-central-1.amazonaws.com/",
    repoLink: "https://github.com/soberbat/pati",
    mediaPath: "petapp",
    shortDesc: "Landing page for a pet adoptation platform",
    mainTakeAway: [
      "I decided to start a side project where I will be applying latest technology to practice. The first iteration is this landing page to collect user emails to sign them in to the newsletter.",
      "I find it especially interesting because the whole app from API management to service communication to website hosting is in the AWS Cloud. One can have many solutions to many problems with AWS cloud.",
      "It is a monorepo initialized using NX. It follows the microservices architecture. The API's are served as Lambda Functions, SQS queue communicates the user data to email service from the user register service.",
      "Emails are being sent using Sendgrid and the user data is being saved to DynamoDB.",
      "AWS CDK used as IAC tool.",
    ],
    codeBreakDown: [
      {
        codeSnippet: ` 
        import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
        import { Cors, EndpointType, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
        import * as lambda from "aws-cdk-lib/aws-lambda";
        import { Construct } from "constructs";
        import * as sqs from "aws-cdk-lib/aws-sqs";
        import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
        
        export default (scope: Construct) => {
          const queue = new sqs.Queue(scope, "landing-email-queue");
          const userEmailsTable = new dynamodb.Table(scope, "UserEmailsTable", {
            partitionKey: { name: "email", type: dynamodb.AttributeType.STRING },
          });
        
          const emailSender = new NodejsFunction(scope, "emailSender", {
            entry: "../lambda/landing-functions/send-email.ts",
            handler: "handler",
          });
          const userRegistrator = new NodejsFunction(scope, "userRegistrator", {
            entry: "../lambda/landing-functions/register-users.ts",
            handler: "handler",
            environment: {
              QUEUE_URL: queue.queueUrl,
              TABLE_NAME: userEmailsTable.tableName,
            },
          });
        
          queue.grantConsumeMessages(emailSender);
          queue.grantSendMessages(userRegistrator);
          userEmailsTable.grantReadWriteData(userRegistrator);
        
          new lambda.EventSourceMapping(scope, "QueueEventSourceMapping", {
            eventSourceArn: queue.queueArn,
            target: emailSender,
          });
        
          new LambdaRestApi(scope, "apigw", {
            handler: userRegistrator,
            endpointTypes: [EndpointType.EDGE],
            defaultCorsPreflightOptions: {
              allowOrigins: Cors.ALL_ORIGINS,
              allowMethods: Cors.ALL_ORIGINS,
              allowHeaders: Cors.DEFAULT_HEADERS,
            },
          });
        };
          
    `,
        text: "The provisioning of the API's. AWS CDK is being used as the IAC tool here to saves us from many many clicks.",
      },
      {
        codeSnippet: `
        import * as cdk from "aws-cdk-lib";
        import * as s3 from "aws-cdk-lib/aws-s3";
        import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
        import { Construct } from "constructs";
        
        export default (scope: Construct) => {
          const siteBucket = new s3.Bucket(scope, "NextjsSiteBucket", {
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "404.html",
            publicReadAccess: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
          });
        
          new s3deploy.BucketDeployment(scope, "DeployNextjsSite", {
            sources: [s3deploy.Source.asset(".././web/out")],
            destinationBucket: siteBucket,
          });
        
          new cdk.CfnOutput(scope, "SiteURL", {
            value: siteBucket.bucketWebsiteUrl,
          });
        };
        `,
        text: "The code bit that lets us serve our Next.js static export in an S3 Bucket. How cool is that?",
      },
    ],
  },

  {
    rectPosition: { top: "30%", left: "70%" },
    projectName: "HEIC TO JPEG Converter",
    mediaPath: "heic",
    repoLink: "https://github.com/soberbat/heic-to-jpeg",
    liveLink: "https://heictojpeg.beratgenc.live/",
    techStack: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "NX",
      "Docker",
      "Express.js",
    ],
    deployment: ["Google Cloud Run"],
    shortDesc: "A Dockerized backend API deployed as GCR service ",
    mainTakeAway: [
      "The app is a fully functioning HEIC to JPEG converter. The API and the web application are<span> deployed as a seperate Google Cloud Run services.</span>",
      "NX used for monorepo initializer and the microservices architecture is implemented.",
      "The backend handles the recieved form data from the frontend using<span> multer</span> and processes the image and changes its format as JPEG.",
      "The frontend is responsible for making the requests with the data to the backend and display the returned data in an <span>asynchronous fashion.</span>",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
        async function fromHEICToJPEG(inputBuffer) {
          try {
            const data = await convert({
              buffer: inputBuffer,
              format: "JPEG",
              quality: 1,
            });

            return data;
          } catch (error) {
            console.error("Error converting HEIC to JPEG:", error);
            throw error;
          }
        }
      `,
        text: "The main function that converts the HEIC input into JPEG. It is an asynchronous function that takes an inputBuffer representing the HEIC image data. It utilizes the heic-convert library to perform the actual conversion.",
      },
      {
        codeSnippet: `
      docker build .  --platform linux/amd64 -t  europe-west1-docker.pkg.dev/dev-sphere-410611/demo/heic-convert-frontend:latest

      docker push europe-west1-docker.pkg.dev/dev-sphere-410611/demo/heic-convert-frontend:latest                           

      gcloud run deploy strapi-cms  --image europe-west1-docker.pkg.dev/dev-sphere-410611/demo/the-dot-cms:latest
      `,

        text: "Some <span>gcloud CLI</span> commands for updating & deploying the API. The initial command builds a <span> Docker </span> image with specified tags. Later, the built image is pushed to a the <span>Google Container Registry</span>, to be used in deployment. Finally the API deployment to Google Cloud Run is executed.",
      },
    ],
  },

  {
    rectPosition: { top: "-40%", left: "-50%" },
    projectName: "Resume Creator",
    liveLink: "http://resumemaker.beratgenc.live/",
    repoLink: "https://github.com/soberbat/r-resume",
    techStack: ["JavaScript", "React.js", "Styled Components"],
    mediaPath: "resume",
    shortDesc: "A resume creation tool made with React.js and Redux",
    mainTakeAway: [
      "It lets you create your own resume to rock your interviews.",
      "The app is a frontend app with complex data management handled by Redux. Multiple slices are being used for organizing the store for better a developer experience.",
      "It is styled using styled components and a very minimalistic design is implemented. You can customize and then download your resume with it.",
      "Reusable components are being used to save us some time.",
    ],
    codeBreakDown: [
      {
        codeSnippet: ` 
        import { configureStore } from "@reduxjs/toolkit";
        import textSlice from "./textSlice";
        import AccordionSlice from "./AccordionSlice";
        import PropSlice from "./PropSlice";
        
        export default configureStore({
          reducer: {
            values: textSlice,
            Accordions: AccordionSlice,
            Properties: PropSlice,
          },
        });
    `,
        text: "Initialization of the Redux Store ",
      },

      {
        codeSnippet: ` 
        export default function Editor() {
          const componentRef = useRef();
          const handlePrint = useReactToPrint({
            content: () => componentRef.current,
            
          });
        
          const visiblity = useSelector((state) => state.values.visibility);
          const PreviewVisibility = useSelector(
            (state) => state.Accordions.PreviewVisibility
          );
          
          return (
            <Wrapper previewVisibility={PreviewVisibility}>
              <PageToPrint ref={componentRef} />
              <Container>
                <Button onClick={handlePrint}>Download 🥷🏼</Button>
                <span>{visiblity && <SavingSpinner id="Spinner" />}</span>
              </Container>
            </Wrapper>
          );
        }
        
    `,
        text: "The editor component that downloads the file to user machine. React and Redux hooks are featured here.",
      },
    ],
  },

  {
    rectPosition: { top: "60%", left: "10" },
    projectName: "Music Gallery",
    mediaPath: "gallery",
    repoLink: "https://github.com/soberbat/music-gallery",
    liveLink: "https://sound.beratgenc.live/",
    techStack: [
      "TypeScript",
      "Three.js",
      "React.js",
      "Styled Components",
      "Framer Motion",
    ],
    deployment: ["Vercel"],
    shortDesc:
      "React & Three.js application with a custom player and linked navigation system",
    mainTakeAway: [
      "This app consists of <span>two classes</span>: Each pane originates from a custom class that extends the Three.Object3D class, while the Scene class handles rendering, controls the <span>general navigation flow</span>, and communicates with the React UI.",
      "The navigation posed the greatest challenge in the project. You can control the app through scrolling and using two distinct UI navigation elements, all of which remain synchronized with each other. The scrolling navigation is implemented using a <span>debouncer.</span>",
      "There is a custom music made react music player linked to the scene, allowing playback control through dragging and clicking. The data is communicated to both the Scene and the UI. So this is an another example of implementation of mouse events.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
      createMaterial = (texture: THREE.Texture, isPaneBase: boolean) => {
        return new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.FrontSide,
          transparent: !isPaneBase,
        });
      };

      updateProgresOverlay = () => {
        if (isNaN(this.trackProgres)) return;
        const scaleX = (this.paneWidth * this.trackProgres) / 100;
        this.progresOverlay!.scale.x = scaleX;
      };

      initVideoTexture = () => {
        return new Promise<THREE.VideoTexture>((resolve) => {
          const video = document.createElement("video");
          video.src = this.getVideoSrc();
          video.loop = true;
          video.autoplay = true;
          video.muted = true;
    
          video.oncanplaythrough = () => {
            video.play();
            resolve(new THREE.VideoTexture(video));
          };
        });
      };
      `,
        text: "These function declarations belong to the Pane class and are written with the Clean Code Principles in mind. They are compliant as each function serves a single purpose with <span>descriptive names and modularity.</span>",
      },
      {
        codeSnippet: `
        interface ITabNavigation extends IEnvironment {
          progres: number;
        }
        
        const TabNavigation = memo(
          ({ progres, onProgres }: Partial<ITabNavigation>) => {
            const containerRef = useRef<HTMLDivElement | null>(null);
            const progressModulo = progres! % PANECOUNT;
            const [width, setwidth] = useState(0);
        
            const showIndex = useCallback(
              (i: number) => (i === PANECOUNT ? 0 : i + 1),
              []
            );
        
            useEffect(() => {
              if (!containerRef.current) return;
              const { width } = containerRef.current.getBoundingClientRect();
              setwidth(width);
            }, []);
        
            return (
              <Container>
                <InnerContainer>
                  <Panes width={width} activePane={progressModulo}>
                    {[...Array(PANECOUNT + 1)].map((_, index) => (
                      <PaneRec
                        onClick={() => onProgres!(index)}
                        isActivePane={index === progressModulo}
                        ref={containerRef}
                        key={index}
                      >
                        {showIndex(index)}
                      </PaneRec>
                    ))}
                  </Panes>
                </InnerContainer>
                <BackgroundOverlay />
              </Container>
            );
          }
        );
        
        export default TabNavigation;
      `,
        text: "<span>Memoized component</span> above renders one of two UI navigations. It calculates the center point of the parent container<span> boundingClientRect API</span>. Then animates the child nodes based on the passed progress prop",
      },
      {
        codeSnippet: `
      const Environment = memo(
        ({
          sceneRef,
          onProgres,
          onPlay,
          trackProgress,
          onRotate,
          onContentLoaded,
        }: IEnvironment) => {
          const rendererWrapper = useRef<HTMLDivElement | null>(null);
      
          useEffect(
            () => sceneRef?.current?.setTrackProgress(trackProgress),
            [trackProgress]
          );
      
          useEffect(() => {
            if (sceneRef)
              !sceneRef.current &&
                (async () => {
                  sceneRef.current = new Scene({
                    rendererContainer: rendererWrapper.current,
                    handleProgress: onProgres!,
                    onRotation: onRotate!,
                    onPlay: onPlay!,
                  });
      
                  await sceneRef.current.init();
                  onContentLoaded();
                  sceneRef.current.animate();
                })();
          }, []);
      
          return <Container ref={rendererWrapper} />;
        }
      );
      
      export default Environment;
      `,
        text: "Component above initializes the scene. It demonstrates how the useRef hook can be utilized to hold any value, including a class instance. By referencing the class, it becomes possible to utilize its methods and link the UI with the instance.",
      },
      {
        codeSnippet: `
      const onMouseMove = (e: MouseEvent) => {
        if (!boundingBox) return;
        const progressBarWidth = boundingBox?.width;
        const leftOffset = boundingBox?.x;
        const positionOnBar = e.clientX - leftOffset;
        const position = (positionOnBar / progressBarWidth) * FULL_PERCENTAGE;
        const withMouseOffset = position + MOUSE_OFFSET;
        setTimeToSlideTo(Math.min(withMouseOffset, FULL_WIDTH_MINUS_HANDLE_OFFSET));
      };
    
      useEffect(() => {
        setBoundingBox(pBarRef.current && pBarRef.current.getBoundingClientRect());
        document.addEventListener("mousemove", onMouseMove);
      }, [pBarRef.current]);
      `,
        text: "Code above demonstrates Frontend math in action, achieving precise outcomes. It dynamically calculates the position of the slider handle based on mouse movement. By utilizing <span>bounding box measurements and mouse coordinates</span>, it determines the exact position to set the slider, giving an accurate representation of user input.",
      },
    ],
  },

  {
    rectPosition: { top: "0%", left: "-60%" },
    projectName: "Awab Alsaati Portfolio",
    mediaPath: "alsaati",
    liveLink: "https://www.awabalsaati.com/",
    repoLink: "https://github.com/soberbat/awabsfolio",
    techStack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Styled Components",
      "Framer Motion",
    ],
    deployment: ["Vercel"],
    shortDesc:
      "A client work featuring, XHR powered preloader mechanism and a Zustand powered state management strategy.",
    mainTakeAway: [
      "This project's entire production cycle, from development through testing to deployment, is managed by me. The application is the product of precise translation design into code.",
      "Prominent features include a <span>preloader implemented using class syntax, custom hooks,</span> and the utilization of<span> Zustand </span>as a state managager",
      "Another part of the app is how data types are being transformed into one another using methods available on them.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
        class Preloader {
          handleRequestEnd;
          handleProgress;
          urlsToPreload: PreloadUrlConfig;
          preloadedSources: PreloadUrlConfig;
          loadedImages = 0;
          imageCount = 60;
          progress = 0;
        
          constructor({ handleRequestEnd, handleProgress }: IPreloader) {
            this.handleRequestEnd = handleRequestEnd;
            this.handleProgress = handleProgress;
            this.urlsToPreload = createImageUrls();
            this.preloadedSources = {};
            this.preloadAll();
          }
        
          addPrefix = (url: string) => "/images/works/url";
        
          onLoad = (resolve: Resolve, xhr: XMLHttpRequest) => {
            this.loadedImages++;
        
            const percantage = this.loadedImages / this.imageCount;
            this.handleProgress(Math.ceil(percantage * 100));
        
            if (this.loadedImages === this.imageCount) {
              this.handleRequestEnd(this.preloadedSources);
            }
        
            resolve(URL.createObjectURL(xhr.response));
          };
        
          preload = (url: string) => {
            return new Promise((resolve: Resolve, _) => {
              const xhr = new XMLHttpRequest();
              xhr.onload = () => this.onLoad(resolve, xhr);
        
              xhr.open("GET", url, true);
              xhr.responseType = "blob";
              xhr.send(null);
            });
          };
        
          preloadAll = async () => {
            for (const key in this.urlsToPreload) {
              this.preloadedSources[key] = await Promise.all(
                this.urlsToPreload[key].map(async (url) => {
                  if (Array.isArray(url)) {
                    return await Promise.all(
                      url.map(async (url) => await this.preload(this.addPrefix(url)))
                    );
                  }
        
                  return await this.preload(this.addPrefix(url));
                })
              );
            }
          };
        }
        
        export default Preloader;
    `,
        text: "A <span>XHR backed preloading mechanism</span> written with class syntax. Displays overall loading progress for better user experience. It creates URL's to be used throughout the app.",
      },
      {
        codeSnippet: ` 
        const usePreloder = () => {
          const [isPreloaded, setisPreloaded] = useState<boolean>(false);
          const { setImageUrls } = useStore();
          const [progress, setProgress] = useState(0);
          const preloader = useRef<Preloader | null>(null);
        
          const handleRequestEnd = (imageUrls: PreloadUrlConfig) => {
            setImageUrls(imageUrls);
            setisPreloaded(true);
          };
        
          const handleProgress = (progress: number) => {
            setProgress(progress);
          };
        
          useEffect(() => {
            preloader.current = new Preloader({ handleRequestEnd, handleProgress });
          }, []);
        
          return { isPreloaded, progress };
        };
        
        export default usePreloder;
      `,
        text: "A <span>custom hook </span>to isolate preloading logic from the app. It saves the returned urls to the Zustand store and returns the loaded and progress state to be used in the UI.",
      },
      {
        codeSnippet: ` 
      const scaleX = useSpring(useTransform(motionValProgres, [0, 100], [0, 1]), {
        stiffness: 10,
        damping: 15,
      });
      `,
        text: "<span>Framer motion API's </span> working together in action to interpolate input and smoothly animate.",
      },
      {
        codeSnippet: ` 
        interface IPageBackground {
          className?: string;
        }
        
        const PageBackground = ({ className }: IPageBackground) => {
          return (
            <S.Container className={className}>
              <S.ColorOverlay />
              <S.BackgroundImage />
            </S.Container>
          );
        };
        
        export default PageBackground;
      `,
        text: "Page background component that is being used on pages.",
      },
    ],
  },

  {
    rectPosition: { top: "100%", left: "-50%" },
    projectName: "Scroll Triggered Story",
    liveLink: "https://scrollstory.beratgenc.live/",
    repoLink: "https://github.com/soberbat/scroll-triggered-story",
    mediaPath: "story",
    techStack: ["TypeScript", "React.js", "Styled Components", "Framer Motion"],
    deployment: ["Vercel"],
    shortDesc:
      "An attempt to get as close as possible to a WebFlow page using React and Typescript.",
    mainTakeAway: [
      "This project is yet another attempt to replicate a <span>Webflow</span> page that is animated using <span>scroll input.</span>",
      "This version of the app is written using <span> Typescript, React. </span>  And the UI is animated using framer motion API's.",
      "I particulary payed attention to the readability of the code. The concrete and solid feel of the code makes it easier to read.",
    ],
    codeBreakDown: [
      {
        codeSnippet: ` 
      interface CornerProps {
        className?: string;
      }
      
      const Corners: React.FC<CornerProps> = ({ className }) => {
        const positionConfig = Object.values(CornerPosition);
      
        return (
          <Container className={className}>
            {positionConfig.map((pos, i) => (
              <CornerWrap key={i} position={pos}>
                <Corner />
              </CornerWrap>
            ))}
          </Container>
        );
      };
      
      export default Corners;
      `,
        text: "The component iterates through corner positions using an <span>enum</span>, and renders a Corner component for each position, reusability of this creates a unified appearence.",
      },
      {
        codeSnippet: `
      
      export interface IRotatingCircle {
        scrollProgress: MotionValue<number>;
      }
      
      const RotatingCircle: FC<IRotatingCircle> = ({ scrollProgress }) => {
        const isMobile = isMobileDevice();
        const [currentSegment, setCurrentSegment] = useState<Segment>(0);
        const transformOutput = [-100, isMobile ? -25 : -43];
        const translate = useTransform(scrollProgress, [0.06, 0.08], transformOutput);
      
        const evalueCurrentSegment = useCallback((latestScrollPosition: number) => {
          const currentSegment =
            latestScrollPosition < SegmentThreshold.HistorySegment // ENUM
              ? Segment.History
              : latestScrollPosition < SegmentThreshold.OriginSegment // ENUM
              ? Segment.Origin
              : Segment.Symbol;

          setCurrentSegment(currentSegment);
        }, []);
      
        useMotionValueEvent(scrollProgress, "change", evalueCurrentSegment);
      
        return (
          <S.Container translate={translate}>
            <S.TransformContainer currentSegment={currentSegment}>
              {Segments.map(({ name, style }, i) => (
                <S.Segment key={i} isActive={i === currentSegment} style={style}>
                  <S.InnerSegmentContainer currentSegment={currentSegment}>
                    <S.RotatedSquare />
                    <S.Name>{name}</S.Name>
                  </S.InnerSegmentContainer>
                </S.Segment>
              ))}
            </S.TransformContainer>
          </S.Container>
        );
      };
      
      export default RotatingCircle;
      
      `,
        text: "This component utilizes various features of the <span>Framer Motion API's</span> for animations, such as useTransform and event handling with useMotionValueEvent. These features creates smooth interactive animations based on the scroll progress input. TypeScript enums are used to define constants like SegmentThreshold and Segment, assuring a <span>type-safe</span> way to work with predefined values.",
      },
      {
        codeSnippet: `
      export default (breakpoint: string, styles: string | any) => css"
        @media screen and (min-width: (breakpoint)) {
          {styles}
        }";
      `,
        text: "Using template literals in combination with styled-components, this function generates CSS rules wrapped in a media query that targets different screens. By <span>encapsulating styling logic</span> within the function, the responsive layout was built easily.",
      },
      {
        codeSnippet: ` 
      export const TransformContainer = styled(motion.div).attrs<IInnerContainer>(
        ({ currentSegment }) => ({
          animate: {
            rotate: "(evaluateCircleRotation(currentSegment))deg",
          },
          transition: {
            ...infoFlowConfig,
          },
          initial: { rotate: "160deg" },
        })
      )"
        width: 100%;
        height: 100%;
        border: 2px solid (color);
        border-radius: 9999px;
        position: relative;
      ";
      
      `,
        text: "An example of <span>styled-components and framer-motion </span> used together",
      },
    ],
  },
  {
    rectPosition: { top: "120%", left: "-10%" },
    projectName: "Canvas Art",
    mediaPath: "canvas",
    liveLink: "https://canvasart.beratgenc.live/",
    repoLink: "https://github.com/soberbat/canvas-art",
    techStack: [
      "TypeScript",
      "React.js",
      "HTML Canvas",
      "Styled Components",
      "Framer Motion",
    ],
    deployment: ["Vercel"],
    shortDesc: "An HTML Canvas app written using class syntax",
    mainTakeAway: [
      "This app is an interactive <span>HTML Canvas</span> that generates artistic patterns based on randomly generated data. The whole idea of this project was to explore how class syntax can be utilized as a means of separating logic and writing efficient code. There are two classes that works together for the end result.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `  
    init() {
      this.symbolsCount += 10;
      const isVertical = Math.random() < 0.5 ? true : false;
  
      this.y = this.getRandomArbitrary(0, window.innerHeight - 0);
      this.x = this.getRandomArbitrary(window.innerWidth - 0, 0);
      const color = this.randColor();
      this.context.font = this.fontSize + "px monospace";
  
      [...Array(10).fill(0)].map(
        (_, i) =>
          (this.symbols[i + this.symbolsCount] = new Symbol({
            x: this.x,
            y: this.y,
            isVertical,
            context: this.context,
            color,
          }))
      );
    `,
        text: "This code bit creates vertical lines seen on the page. The Symbol class instances are what we see as 0's and 1's. They are being being drawn into the canvas with random positions, and colors. All these are being handled with class specific functions and this way we're keeping the logic seperated from outside world but as one in the class itself.",
      },
    ],
  },

  {
    rectPosition: { top: "-35%", left: "50%" },
    projectName: "Session Auth",
    mediaPath: "sessionauth",
    liveLink:
      "https://auth-with-session.in3a4agovd8hi.eu-central-1.cs.amazonlightsail.com/",
    repoLink: "https://github.com/soberbat/auth-service",
    techStack: ["Node.js"],
    deployment: ["Terraform", "AWS Lightsail", "AWS RDS Postgres"],
    shortDesc:
      "A Dockerized backend API featuring Redis Cache, Cookie Based Authentication and Database interactions",
    mainTakeAway: [
      "The demo is developed using <span>Express.js following MVC pattern</span>. It demonstrates how session authentication works on server side, with cookies. The cookies are stored using Redis Cache.",
      "Terraform is used to provision the infrastructure. RDS Postgres database and AWS Lightsail container deployment for the serving of the docker image is provisioned using IAC.",
      "It features <span>SQL command execution</span> for database interactions for data retrieval & manipulation.",
      "The code demonstrates clear and readable handling of multiple routes.",
      "Read the API documentation on repository README for testing.",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
          const mysql = require("mysql2");
          require("dotenv").config();

          const pool = mysql.createPool({
            host: process.env.DB_HOSTNAME,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
          });

          module.exports = pool.promise();
      `,
        text: "Above sets up a <span>MySQL connection pool</span>. It configures the pool with environment variables. It exports the pool instance for use across the application.",
      },
      {
        codeSnippet: `
      checkIfUserExists: async function (username, password) {
        try {
          const [response] = await db.execute(sql.checkIfUserExist, [username]);
          const userExist = response.length >= 1;
    
          if (!userExist) {
            return { message: sql.userDoesntExist, isSuccesfull: false };
          }
    
          const userData = response[0];
          const isPasswordCorrect = module.exports.checkPassword(
            userData,
            password
          );
    
          return {
            isSuccesfull: isPasswordCorrect,
            message: isPasswordCorrect ? sql.success : sql.wrongPassword,
          };
        } catch (error) {
          console.log(error.sqlMessage);
        }
      },
      `,
        text: "This code snippet checks for the user's existence in the database using the pre-configured connection pool. It executes a <span>SQL query</span> from a config file to verify the user's existence.",
      },
      {
        codeSnippet: `
      
        resource "aws_lightsail_container_service" "auth_with_session" {
          name  = "auth-with-session"
          power = "nano"
          scale = 1
          tags = {
            version = "1.0.0"
          }

        }

        resource "aws_lightsail_container_service_deployment_version" "session_auth_deployment" {
          container {
            container_name = "auth-with-session"
            image          = "soberbosso/session-auth:latest"
            ports = {
              3001 = "HTTP"
            }

            # environment = {}
          }

          public_endpoint {
            container_name = "auth-with-session"
            container_port = 3001

            health_check {
              healthy_threshold   = 2
              unhealthy_threshold = 2
              timeout_seconds     = 2
              interval_seconds    = 5
              path                = "/"
              success_codes       = "200-499"
            }
          }
          service_name = aws_lightsail_container_service.auth_with_session.name
        }
      `,
        text: "Terraform in action. It saves quite a lot of time and it is pretty straightforward once you get comfortable",
      },
      {
        codeSnippet: ` 
      const PORT = process.env.PORT;

      const { corsOptions, sessionOptions } = require("./config");
      const cookieParser = require("cookie-parser");
      const session = require("express-session");
      const bodyParser = require("body-parser");
      const express = require("express");
      const cors = require("cors");

      const dashboardController = require("./controllers/dashboard.controller");
      const logoutController = require("./controllers/logout.controller");
      const signupController = require("./controllers/signup.controller");
      const loginController = require("./controllers/login.controller");
      const rootController = require("./controllers/root.controller");

      const app = express();

      app.use(cors(corsOptions));
      app.use(cookieParser());
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));

      app.enable("trust proxy");
      app.use(session(sessionOptions));

      app.get("/", rootController);
      app.get("/dashboard", dashboardController);
      app.post("/signup", signupController);
      app.post("/logout", logoutController);
      app.post("/login", loginController);

      app.listen(PORT, () => console.log(---- App running on {PORT}));
      `,
        text: "Above sets up an <span>HTTP server with middlewares & defines multiple routes</span>, each handled by their controllers.",
      },
    ],
  },

  {
    rectPosition: { top: "100%", left: "60%" },
    projectName: "Task Manager Backend",
    mediaPath: "taskerapi",
    liveLink: "https://backend.taskermanager.site",
    techStack: ["Nest.js"],
    deployment: ["Google Cloud Run", "Docker", "Github Actions"],
    repoLink: "https://github.com/soberbat/task-manager",
    shortDesc: "Fully automated dockerized GCR service written with Nest.js.",
    mainTakeAway: [
      "A task manager API written using Nest.js, Nest CLI and Prisma as the ORM. It performs <span>CRUD operations an a MySQL</span> based database which includes several number of <span>tables with one-to-one, many-to-many, and one-to-many relationships.</span>",
      "It uses redis as a cookie storage to save user session for authentication",
      "The API endpoints are <span>documented using Swagger UI</span> for easy exploration and testing.",
      "The app is fully <span>automated with Github Actions</span>. And features integrations with Google Cloud Products. Overall, application showcases <span>modern development practices and integration with industry standart tools.</span>",
    ],
    codeBreakDown: [
      {
        codeSnippet: `
      
      model EmployeeOnTeams {
        teamId     Int
        employeeId Int
        team       Team     @relation(fields: [teamId], references: [id], onDelete: Cascade)
        employee   Employee @relation(fields: [employeeId], references: [id], onDelete: Cascade)

        @@id([teamId, employeeId])
      }

      model Project {
        id          Int       @id @default(autoincrement())
        name        String
        description String?
        tasks       Task[]
        teamId      Int
        employeeId  Int?
        team        Team      @relation(fields: [teamId], references: [id], onDelete: Cascade)
        employee    Employee? @relation(fields: [employeeId], references: [id], onDelete: Cascade)
      }
      `,

        text: "<span>Prisma schema definitions</span> for tables. The EmployeeOnTeams table establishes a many-to-many relationship between teams and employees. The Project table includes fields for name, description, tasks, and references to Team and Employee. Relationships are established using the @relation directive, specifying the fields and references for each relationship, with cascading deletion enabled.",
      },
      {
        codeSnippet: `
      assignTask(id: number, taskId: number) {
        return this.databaseService.employee.update({
          where: { id },
          data: { tasks: { connect: { id: taskId } } }
        })
      }
    
      `,

        text: "Function above showcases how easy it is to communicate with the database with <span>Prisma</span>. It offers very familiar syntax for interacting with the data modal by reducing the boilerplate code compared to traditional SQL queries.",
      },
      {
        codeSnippet: `
            @Patch('/update')
            update(
              @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput,
              @Req() request: Request
            ) {
              const userId = request.session.userId
              return this.employeeService.update(userId, updateEmployeeDto)
            }
      `,
        text: "One of the controllers for the Employee Table. When a request is being made, it extracts the userId from the session and updates only the related user.",
      },
      {
        codeSnippet: `
      async signin({ email, password }: Partial<Prisma.EmployeeCreateInput>) {
        const user = await this.databaseService.employee.findUnique({
          where: { email, password },
          include: { teams: { include: { team: true } } }
        })
    
        return user ? { userId: user.id, teamId: user.teams[0].teamId } : false
      }
    }
      `,

        text: "The service that looks up for the user on the database and returns user to the controller. Complex database operations is much more simplified with Prisma.",
      },
      {
        codeSnippet: `
        - name: Build and Push
        env:
          GCLOUD_PROJECT_ID: {{ secrets.GCLOUD_PROJECT_ID }}
          REPO: {{ secrets.REPO }}
        run: |
          gcloud auth configure-docker europe-west1-docker.pkg.dev
          docker build -t europe-west1-docker.pkg.dev/$GCLOUD_PROJECT_ID/$REPO/nestapp:latest .
          docker push europe-west1-docker.pkg.dev/$GCLOUD_PROJECT_ID/$REPO/nestapp:latest
  
      - name: Deploy
        env:
          GCLOUD_PROJECT_ID: {{ secrets.GCLOUD_PROJECT_ID }}
          REPO: {{ secrets.REPO }}
        run: |
          gcloud run deploy task-manager \
            --region europe-west1 \
            --image=europe-west1-docker.pkg.dev/$GCLOUD_PROJECT_ID/$REPO/nestapp \
            --allow-unauthenticated
      `,

        text: "A part of the workflow file that automates the application with multiple steps. It uses repository secrets for safety.",
      },
    ],
  },
];
