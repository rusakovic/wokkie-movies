### Objective

Your assignment is to implement a React Native movie listing app.

### Brief

You are the owner of a movie theater in **Thikkiiana City,** on the Wookiee homeworld of Kashyyyk. Your customers are bored with the never changing selection and are asking for something completely different - they want to see what's playing on Earth. Wookies are the main exporter of Computer Technology for the New Republic so naturally you roll up your sleeves and get to work. You quickly scribble down some notes and after a few hours of relentless work you have a design in mind.

### Tasks

- Implement a React Native movie listing app
- Build out the project to the designs inside the `/Designs` folder
- Connect your application to the **CodeSubmit Movie Database** at `https://wookie.codesubmit.io/movies`
- For authentication pass the `"Authorization: Bearer Wookie2019"` header
- Parse the API response and display the results as outlined in the design. **Make sure to group movies by categories**.
- Implement a detail view for the movies in the list
- Implement the search view by connecting to `https://wookie.codesubmit.io/movies?q=<search_term>`
- Surprise us! Add a feature that you think would work well here (for instance, advanced search, integration with other API, a "Favorite" functionality)
  - Describe the feature in separate markdown file

### Deliverables

Make sure to include all source code in this repository.

For iOS, include a assignment.zip file containing your compressed .app bundle **in the root of the repository**.
Your .app bundle must represent a simulator build of your app. After running in iOS Simulator via Xcode, look in ~/Library/Developer/Xcode/DerivedData/<project-name>/Build/Products/Debug-iphonesimulator/.
Alternatively, you may run xcodebuild -sdk iphonesimulator (if you use .xcodeproj) or xcodebuild -sdk iphonesimulator -workspace Sample.xcworkspace/ -scheme <your-scheme> -configuration Debug (if you use .xcworkspace) in your project directory, then zip the .app bundle in build/Debug-iphonesimulator/.

For Android, include assignment.apk containing your app **in the root of the repository**.
After your app is built, either via Android Studio or by running the command ./gradlew assembleDebug in your project directory, look in <project-name>/<module-name>/build/outputs/apk/.

### Evaluation Criteria

- **React Native** best practices
- Show us your work through your commit history
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways including proper loading and error states handling?
- Maintainability: is it written in a clean, maintainable way?
  - Dependency management & Packaging
  - Project structure
  - Code Style (style guide, readability, type enforcement)
  - Code complexity
  - Possibility to run app by CLI commands
  - Modern stack (popular libs on recent versions is a plus)
  - Styling approach
    - Usage of theme or at least constants for colors/sizes
    - Repsect to the grid
    - Community best practicies
    - Semantics
- Performance
  - No O(n^3) when it is not required
  - No unnesesary re-renders/repaints
  - Stable FPS
- Testing: is the system adequately tested?
  - Unit testing or Integration testing
  - E2E

### CodeSubmit

Please organize, design, test and document your code as if it were
**going into production** - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The finn GmbH Team

# Max Detailed Review

## How to run the app on simulator

0. Add API key to `.env` file. File structure is presented in `.sample.env` file.
1. `npm i`
2. `npx pod install`
3. `npm run ios` or `npm run android` for running the app on the simulator

## How to test the app

Jest

1. For Jest tests run: `npm run test`

Detox

1. For Detox test:
2. Setup detox env on your machine: https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md
3. Build test app: ios: `detox build -c ios` android: `detox build -c android`
4. Run detox tests: ios: `detox test -c ios` android: `detox test -c android`

## App preview

https://user-images.githubusercontent.com/17801144/141693168-50b4ca16-4ecf-4e52-82e9-5df9c0924141.mp4

### Evaluation Criteria Explanation

### **React Native** best practices:

1. Using Typescript for all components (declaring types in separate files or using Global Types)
2. Created reusable components: container, text, spacer.
3. Using alias for navigation to use only absolute paths
4. Using index.ts for screens and components for easier navigation and importing
5. For file structuring is used approach 'where is the action'. For example, screen has styles, types, tests in one folder
6. Adding check internet functionality

### Show us your work through your commit history

1. Added numeration for git log history commits.
   ![image](https://user-images.githubusercontent.com/17801144/141693488-351bae5f-5257-44e2-aafc-e12b4c7ccc3d.png)
   On real project we will link [1] number to Jira task, for example, to have easier understanding when the file was changed

### Completeness: did you complete the features?

1. ✅ Build out the project to the designs inside the `/Designs` folder
2. ✅ Connect your application to the API
3. ✅ Group movies by categories
4. ✅ Implement a detail view for the movies in the list
5. ✅ Implement the search view by connecting to API
6. ✅ BONUS: Added Favorite functionality.
7. ✅ BONUS: Added Watched Movie functionality.
8. ✅ BONUS: Added No Internet Connection notification.
9. ✅ BONUS: Added Poster and Backdrop full screen preview.
10. ✅ BONUS: Possibility to hide watched movies in search result.
11. ✅ BONUS: Quick search input clearance.

### Correctness: does the functionality act in sensible, thought-out ways including proper loading and error states handling?

| Error message                                                                                                                  | Loading indicator                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/17801144/141694894-a04cc51b-81c8-4629-bdef-23abb4a9b1b8.png" width="200" > | <img src="https://user-images.githubusercontent.com/17801144/141694592-ff49fbc4-7c01-4dfb-80f8-997781d8ea1c.gif" width="200" > |

### Maintainability: is it written in a clean, maintainable way?

- Dependency management & Packaging

1. Used latest packages. No dependency issues

- Project structure

1. All app files and folders are moved to `src` folder to make the root more cleaner
2. Screens, components, utils, etc. are divided logically to their folders

  <img src="https://user-images.githubusercontent.com/17801144/141695323-c259f46b-08ee-4c13-90d6-dd6b18ebae12.png" width="200" >

- Code Style (style guide, readability, type enforcement)

1. Trying to keep files as less as possible
2. Added types for all functions where it is required

<img src="https://user-images.githubusercontent.com/17801144/141695376-302b9227-2b32-45cd-806c-76b0eb9c8f4a.png" width="300" >

- Code complexity

1. To minimize complexity of each component, reusable functions were moved to separate folder `utils`

  <img src="https://user-images.githubusercontent.com/17801144/141695475-cd6d15a8-cfac-45b2-a3fb-ead2b66e06e7.png" width="300" >

- Possibility to run app by CLI commands

1. Commands are described in section above `How to run`

- Modern stack (popular libs on recent versions is a plus)

1. Used only latest packages
   `npm outdated` shows no result!

- Styling approach
  - Usage of theme or at least constants for colors/sizes
  - Repsect to the grid
  - Community best practicies
  - Semantics

1. Used only relative sizes for `View` and `Text`. It helps to get the same designs on iOS and Android

- Performance
  - No O(n^3) when it is not required
  - No unnesesary re-renders/repaints
  - Stable FPS

Video preview of FPS:

https://user-images.githubusercontent.com/17801144/141695856-e1c4c53c-0efb-40df-a3e1-6aab1b675192.mp4

- Testing: is the system adequately tested?
  - Unit testing or Integration testing
  - E2E

1. Added Jest and Detox test as example:

DETOX:

  <img src="https://user-images.githubusercontent.com/17801144/141695912-cd716cf1-eb17-49b8-b17a-7ed656ded6cd.png" width="600" >

JEST:

  <img src="https://user-images.githubusercontent.com/17801144/141695948-eb23e184-8a91-4e52-abf1-42b37243a299.png" width="400" >
