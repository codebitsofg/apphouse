export default [
  {
    rectPosition: { top: "10%", left: "-20%" },
    projectName: "Space Crafts V10",
    mediaPath: "shore",
    date: "June 2024",
    projectType: "Frontend",
    repoLink: "#",
    liveLink: "#",
    techStack: [
      "TypeScript",
      "Strapi CMS",
      "shadcn",
      "Next.js",
      "Tailwindcss",
      "Amazon S3",
    ],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ex at augue suscipit faucibus non vitae libero.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer gravida neque vel risus laoreet, nec vulputate nunc aliquam.",
      "Fusce interdum tellus nec metus ultrices, non scelerisque velit tristique. Proin convallis sem at velit cursus, nec tempor erat congue.",
      "Aliquam quis arcu posuere, tincidunt purus in, aliquet quam. Etiam condimentum, lorem nec efficitur ultrices, justo magna sollicitudin magna, vel laoreet augue nunc et nulla.",
      "Curabitur nec sapien at velit pretium malesuada in at metus. Vivamus luctus eros in dui pharetra, nec consequat enim vestibulum.",
      "Donec feugiat est sed urna iaculis luctus. Cras varius arcu nec lacus hendrerit, et consequat libero auctor.",
      "Suspendisse potenti. Etiam eu velit nec augue lacinia aliquam. Nulla facilisi.",
      'Ut tincidunt elit at mi pharetra, non tincidunt turpis sodales. Praesent id orci at velit tincidunt tincidunt. <strong><a href="https://medium.com/@beratgenc.dev/seo-optimization-for-next-js-14-dynamic-routes-b396ac0f6230" target="_blank">Lorem ipsum</a></strong>',
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac orci non arcu vehicula posuere.",
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
        text: "Vestibulum vehicula ligula eu magna congue, a tincidunt ex vehicula. Integer sagittis dolor sed urna vulputate, sit amet tempor nulla gravida.",
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
        text: "Praesent quis orci nec velit dapibus pharetra a eget lacus. Nulla facilisi. Sed viverra velit quis justo gravida tristique.",
      },
    ],
  },

  {
    rectPosition: { top: "-30%", left: "0%" },
    projectName: "Space Crafts V9",
    date: "Jan 2024",
    projectType: "Full Stack",
    techStack: ["TypeScript", "Next.js", "Docker", "Styled Components"],
    deployment: ["Github Actions", "Google Cloud Run"],
    liveLink: "#",
    repoLink: "#",
    mediaPath: "tasker",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci vitae justo consectetur feugiat.",
      "Praesent aliquam metus at turpis luctus, eget vulputate nunc tincidunt.",
      "Fusce consequat turpis sit amet libero ultricies, vitae blandit magna posuere.",
      "Integer vitae eros vel justo facilisis commodo. Nulla et turpis lacus.",
      "Curabitur quis augue nec velit dictum hendrerit. Aenean venenatis lacus et ipsum bibendum efficitur.",
      "Mauris dapibus velit sit amet libero efficitur, vitae posuere sapien mollis.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ipsum nec libero varius feugiat.",
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
        text: "Curabitur quis arcu viverra, fringilla nunc non, ultricies libero. Nulla malesuada metus a nisl auctor, quis blandit justo tincidunt.",
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
        text: "Suspendisse potenti. Nam in lectus in sapien dictum tincidunt. Integer at ex vel libero scelerisque interdum.",
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
        text: "Proin ut mi non metus tempus tincidunt a id neque. Pellentesque quis sapien sed velit faucibus efficitur.",
      },
    ],
  },

  {
    rectPosition: { top: "-40%", left: "-50%" },
    projectName: "Infınıty",
    date: "Mar 2021",
    projectType: "Frontend",
    liveLink: "#",
    repoLink: "#",
    techStack: ["JavaScript", "React.js", "Styled Components"],
    mediaPath: "resume",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula felis eu nisi cursus, euismod cursus libero tempus.",
      "Sed euismod, elit in cursus pretium, urna felis consectetur lectus, sit amet tempus lorem libero eu ante.",
      "Vestibulum convallis dolor et venenatis consectetur. Aenean fringilla vitae magna ac tincidunt. Curabitur ut viverra sapien.",
      "Proin at leo et risus dapibus malesuada. Morbi in risus id nunc iaculis condimentum. Nulla facilisi.",
      "Etiam eget sapien ac leo tristique volutpat et et mauris. In pretium auctor feugiat.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate mi eu urna pretium, at mollis augue tristique.",
      },

      {
        codeSnippet: ` 
        const arr = Object.entries(state.Accordions.Education);
        const filtered = arr.filter(
          ([key, value]) => key !== action.payload.id
        );
        const newState = Object.fromEntries(filtered);
        state.Accordions.Education = {
          ...newState,
        };
      `,
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        text: "Vivamus convallis justo at metus tristique, non gravida lorem tincidunt. Phasellus auctor sollicitudin ante a vulputate.",
      },
    ],
  },

  {
    rectPosition: { top: "10%", left: "40%" },
    projectName: "Ore",
    date: "May 2024",
    projectType: "Cloud",
    techStack: ["TypeScript", "Next.js", "Axios", "Tailwind CSS"],
    deployment: ["AWS Lambda", "S3 Deployment", "AWS CDK", "DynamoDB", "SQS"],
    liveLink: "#",
    repoLink: "#",
    mediaPath: "petapp",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Vivamus fermentum, felis ac feugiat aliquet, nulla risus pellentesque neque, ut auctor nulla purus eu lorem.",
      "Suspendisse potenti. Etiam faucibus lorem vitae lectus scelerisque, non fermentum libero cursus. Aliquam erat volutpat.",
      "Fusce tincidunt massa a lectus iaculis, non consectetur ante feugiat. Donec ut sem a ligula vestibulum fermentum.",
      "Maecenas tristique vehicula lorem, sed tincidunt nisl gravida eget. Quisque ac massa at sapien pharetra feugiat.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut ligula ac lorem varius gravida. Aliquam erat volutpat.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dui viverra, faucibus erat in, luctus nunc. Donec auctor sollicitudin ligula.",
      },
    ],
  },

  {
    rectPosition: { top: "30%", left: "70%" },
    projectName: "Pink Bloom",
    date: "Sept 2023",
    projectType: "Full Stack",
    mediaPath: "heic",
    repoLink: "#",
    liveLink: "#",
    techStack: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "NX",
      "Docker",
      "Express.js",
    ],
    deployment: ["Google Cloud Run"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae eros ut eros posuere hendrerit.",
      "NX facilisis dolor in, maximus dolor tristique ut. Aenean sed lorem sapien.",
      "Donec volutpat arcu leo, ac tristique nisl accumsan ac. Vestibulum egestas urna at neque luctus, eget laoreet turpis ullamcorper.",
      "Curabitur eu dolor id eros facilisis tincidunt et eu libero. Donec luctus libero at orci malesuada feugiat.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      },
      {
        codeSnippet: `
          docker build .  --platform linux/amd64 -t europe-west1-docker.pkg.dev/dev-sphere-410611/demo/heic-convert-frontend:latest
          docker push europe-west1-docker.pkg.dev/dev-sphere-410611/demo/heic-convert-frontend:latest
          gcloud run deploy strapi-cms  --image europe-west1-docker.pkg.dev/dev-sphere-410611/demo/the-dot-cms:latest
        `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      },
    ],
  },
  {
    rectPosition: { top: "60%", left: "10" },
    projectName: "Black Void",
    date: "Aug 2023",
    projectType: "Frontend",
    mediaPath: "gallery",
    repoLink: "#",
    liveLink: "#",
    techStack: [
      "TypeScript",
      "Three.js",
      "React.js",
      "Styled Components",
      "Framer Motion",
    ],
    deployment: ["Vercel"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae eros ut eros posuere hendrerit.",
      "Aenean vel arcu nec turpis aliquam dictum. Donec suscipit ligula ut ante consequat, ut varius urna elementum.",
      "Curabitur eget leo nec mi fermentum luctus. Ut posuere est eget turpis aliquet, ut vulputate lorem auctor.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non est vitae augue tempor.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget arcu nec urna pretium convallis. Sed elementum risus.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis ante orci, et consequat orci facilisis nec.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et quam ut felis facilisis suscipit.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel nulla venenatis, facilisis libero ac, fringilla nisl.",
      },
    ],
  },

  {
    rectPosition: { top: "0%", left: "-60%" },
    projectName: "Sent",
    mediaPath: "alsaati",
    date: "Jul 2023",
    projectType: "Frontend",
    liveLink: "#",
    repoLink: "#",
    techStack: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Styled Components",
      "Framer Motion",
    ],
    deployment: ["Vercel"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      },
      {
        codeSnippet: ` 
          const scaleX = useSpring(useTransform(motionValProgres, [0, 100], [0, 1]), {
            stiffness: 10,
            damping: 15,
          });
        `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      },
    ],
  },

  {
    rectPosition: { top: "100%", left: "-50%" },
    projectName: "H91",
    liveLink: "#",
    date: "June 2023",
    projectType: "Frontend",
    repoLink: "#",
    mediaPath: "story",
    techStack: ["TypeScript", "React.js", "Styled Components", "Framer Motion"],
    deployment: ["Vercel"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Suspendisse potenti. Integer malesuada dui sed nisi aliquet, et hendrerit tortor eleifend. In dapibus dui sit amet arcu euismod, eu euismod libero cursus. Integer dictum risus eu augue consequat, nec vulputate sapien laoreet.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
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
                  latestScrollPosition < SegmentThreshold.HistorySegment
                    ? Segment.History
                    : latestScrollPosition < SegmentThreshold.OriginSegment
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et quam a urna hendrerit tristique.",
      },
      {
        codeSnippet: `
            export default (breakpoint: string, styles: string | any) => css"
              @media screen and (min-width: (breakpoint)) {
                {styles}
              }";
          `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum libero eu ligula feugiat, a malesuada erat maximus.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor a libero cursus gravida.",
      },
    ],
  },
  {
    rectPosition: { top: "120%", left: "-10%" },
    projectName: "CCCt",
    mediaPath: "canvas",
    date: "May 2021",
    projectType: "Frontend",
    liveLink: "#",
    repoLink: "#",
    techStack: [
      "TypeScript",
      "React.js",
      "HTML Canvas",
      "Styled Components",
      "Framer Motion",
    ],
    deployment: ["Vercel"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum scelerisque nisi. Aenean tempor urna eget diam euismod, nec auctor nulla malesuada.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat eros vitae sapien interdum, ac lacinia nisi tincidunt.",
      },
    ],
  },

  {
    rectPosition: { top: "40%", left: "-50%" },
    projectName: "Med",
    mediaPath: "universecam",
    date: "Nov 2023",
    projectType: "Frontend",
    liveLink: "#",
    repoLink: "#",
    techStack: [
      "TypeScript",
      "Three.js",
      "Zustand.js",
      "Framer Motion",
      "Next.js",
      "Styled Components",
    ],
    deployment: ["Vercel"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum velit quis nisi viverra, at interdum lectus faucibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus sit amet urna venenatis, a fringilla augue facilisis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor in sapien interdum efficitur.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, purus sed convallis malesuada, felis felis luctus augue, non pretium neque ligula non nisi.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum velit quis nisi viverra, at interdum lectus faucibus.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus sit amet urna venenatis, a fringilla augue facilisis.",
      },
      {
        codeSnippet: `
          createSprite = (spriteMaterial: THREE.SpriteMaterial) => {
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(0.5, 0.5, 0.5);
            sprite.position.set(
              this.getRandomNumber(-20, 20),
              this.getRandomNumber(-10, 10),
              this.getRandomNumber(-10, 10)
            );
        
            this.scene.add(sprite);
        
            return sprite;
          };
        `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor in sapien interdum efficitur.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, purus sed convallis malesuada, felis felis luctus augue, non pretium neque ligula non nisi.",
      },
      {
        codeSnippet: `
          <PlanetDetailRow data={{ title: "Planet Code", info: "Banu" }} />
        `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus sit amet urna venenatis, a fringilla augue facilisis.",
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
  
          <SliderInnerWrapper slide={slide}></SliderInnerWrapper>
        `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum velit quis nisi viverra, at interdum lectus faucibus.",
      },
    ],
  },

  {
    rectPosition: { top: "-35%", left: "50%" },
    projectName: "Aut",
    mediaPath: "sessionauth",
    date: "Dec 2023",
    projectType: "Backend",
    liveLink: "#",
    repoLink: "#",
    techStack: ["Node.js"],
    deployment: ["Terraform", "AWS Lightsail", "AWS RDS Postgres"],
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum velit quis nisi viverra, at interdum lectus faucibus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus sit amet urna venenatis, a fringilla augue facilisis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor in sapien interdum efficitur.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, purus sed convallis malesuada, felis felis luctus augue, non pretium neque ligula non nisi.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum velit quis nisi viverra, at interdum lectus faucibus.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus sit amet urna venenatis, a fringilla augue facilisis.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, purus sed convallis malesuada, felis felis luctus augue, non pretium neque ligula non nisi.",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor in sapien interdum efficitur.",
      },
      {
        codeSnippet: ` 
        export const App = ({ children }) => {
          const currentPage = usePageContext();
  
          return (
            <div>
              <Navbar currentPage={currentPage} />
              <Main>{children}</Main>
              <Footer />
            </div>
          );
        };
        `,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum velit quis nisi viverra, at interdum lectus faucibus.",
      },
    ],
  },

  {
    rectPosition: { top: "100%", left: "60%" },
    projectName: "Sinc",
    date: "Oct 2023",
    projectType: "Backend",
    mediaPath: "taskerapi",
    liveLink: "#",
    techStack: ["Nest.js"],
    deployment: ["Google Cloud Run", "Docker", "Github Actions"],
    repoLink: "#",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainTakeAway: [
      "The API for the task manager app that is written using Nest.js, Nest CLI, and Prisma as the ORM. It performs CRUD operations on a MySQL database which includes several tables with one-to-one, many-to-many, and one-to-many relationships. It enables creating teams, users, tasks, and projects.",
      "It uses Redis as cookie storage to save user sessions for authentication. The frontend reads it from the middleware function to decide whether to show protected routes or not.",
      "The API endpoints are documented using Swagger UI for easy exploration and testing.",
      "The app is fully automated with Github Actions. Overall, the application showcases modern development practices and integration with industry-standard tools, including integrations with Google Cloud Products.",
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
        text: "Prisma schema definitions for tables. The EmployeeOnTeams table establishes a many-to-many relationship between teams and employees. The Project table includes fields for name, description, tasks, and references to Team and Employee. Relationships are established using the @relation directive.",
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
        text: "Function below showcases how easy it is to communicate with the database using Prisma. It offers a familiar syntax for interacting with the data model by reducing the boilerplate code compared to traditional SQL queries.",
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
        text: "One of the controllers for the Employee Table. When a request is made, it extracts the userId from the session and updates only the related user.",
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
        `,
        text: "The service that looks up the user in the database and returns the user to the controller. Complex database operations are simplified with Prisma.",
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
