import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/layout/Home";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import NotFound from "../views/layout/NotFound";

import UsersMain from "../views/layout/Admin/UsersMain";
import UserEdit from "../views/layout/Admin/UserEdit";

import CoursesMain from "../views/layout/Admin/CoursesMain";
import CourseCreate from "../views/layout/Admin/CourseCreate";
import CourseEdit from "../views/layout/Admin/CourseEdit";
import CourseQuizCreate from "../views/layout/Admin/CourseQuizCreate";

import LessonsMain from "../views/layout/Admin/LessonsMain";
import LessonShowOne from "../views/layout/Admin/LessonShowOne";
import LessonCreate from "../views/layout/Admin/LessonCreate";
import LessonEdit from "../views/layout/Admin/LessonEdit";

import ArticlesMain from "../views/layout/Admin/ArticlesMain";
import ArticleCreate from "../views/layout/Admin/ArticleCreate";
import ArticleEdit from "../views/layout/Admin/ArticleEdit";
import ArticlesShow from "../views/layout/Admin/ArticlesShow";
import ArticleShowOne from "../views/layout/Admin/ArticleShowOne";

import UserProfile from "../views/layout/User/UserProfile";
import QuizMain from "../views/layout/User/QuizMain";

import Permissions from "../views/layout/Permissions";
import EditPermissions from "../views/layout/EditPermissions";
import Management from "../views/layout/Management";
import EditManagement from "../views/layout/EditManagement";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users/dashboard",
        name: "UsersMain",
        component: UsersMain,
    },
    {
        path: "/user/login",
        name: "Login",
        component: Login,
        alias: "/",
    },
    {
        path: "/user/register",
        name: "Registration",
        component: Registration,
    },
    {
        path: "/user/:id",
        name: "UserEdit",
        component: UserEdit,
    },
    {
        path: "/courses/dashboard",
        name: "CoursesMain",
        component: CoursesMain,
    },
    {
        path: "/course/create",
        name: "CourseCreate",
        component: CourseCreate,
    },
    {
        path: "/course/edit/:id",
        name: "CourseEdit",
        component: CourseEdit,
    },
    {
        path: "/course:id/quiz/create",
        name: "CourseQuizCreate",
        component: CourseQuizCreate,
    },
    {
        path: "/course-id:id/lessons",
        name: "LessonsMain",
        component: LessonsMain,
    },
    {
        path: "/course-id:id/lesson-id:lesson",
        name: "LessonShowOne",
        component: LessonShowOne,
    },
    {
        path: "/course-id:id/lessons/create",
        name: "LessonCreate",
        component: LessonCreate,
    },
    {
        path: "/course-id:id/lesson-id:lesson/edit",
        name: "LessonEdit",
        component: LessonEdit,
    },
    {
        path: "/articles/dashboard",
        name: "ArticlesMain",
        component: ArticlesMain,
    },
    {
        path: "/article/create",
        name: "ArticleCreate",
        component: ArticleCreate,
    },
    {
        path: "/article/edit/:id",
        name: "ArticleEdit",
        component: ArticleEdit,
    },
    {
        path: "/articles",
        name: "ArticlesShow",
        component: ArticlesShow,
    },
    {
        path: "/articles/:id",
        name: "ArticleShowOne",
        component: ArticleShowOne,
    },
    {
        path: "/user/management",
        name: "Management",
        component: Management,
    },
    {
        path: "/user/management/:id",
        name: "EditManagement",
        component: EditManagement,
    },
    {
        path: "/user/permissions",
        name: "Permissions",
        component: Permissions,
    },
    {
        path: "/user/permissions/:id",
        name: "EditPermissions",
        component: EditPermissions,
    },
    {
        path: "/user/profile",
        name: "UserProfile",
        component: UserProfile,
    },
    {
        path: "/quiz",
        name: "QuizMain",
        component: QuizMain,
    },
    {
        path: "/:notFound(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: "active",
    linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("x-token");

    if (!token) {
        if (to.name === "Login" || to.name === "Registration") {
            return next();
        } else {
            return next({
                name: "Login",
            });
        }
    }
    if (to.name === "Login" || (to.name === "Registration" && token)) {
        return next({
            name: "Home",
        });
    }
    next();
});

export default router;
