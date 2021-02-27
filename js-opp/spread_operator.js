const first = [1, 2, 3];
const second = [3, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];
console.log(combined);

///////////////////////

const courses = {
    0: {
        id: 0,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
    },
    1: {
        id: 1,
        description: "Angular for Beginners",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'BEGINNER',
        lessonsCount: 10
    }
};

console.log('courses',courses);

const courseId = 0;
const changes = {
        id: 5,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 5
};

// console.log('changes',changes);


// convert object first level in array
const oldCourses = Object.values(courses);
console.log('courses',oldCourses);
const courseIndex = oldCourses.findIndex(course => course.id === courseId);
const newCourses = oldCourses;

console.log('newCourses', newCourses);

// spread in object: modify object property
newCourses[courseIndex] = {
    ...oldCourses[courseIndex],
    ...changes
}

console.log('newCourses modify', newCourses);

// object with first level converted to array
console.log(Object.values(courses));