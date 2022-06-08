// 用户模块
import { USER_INFO } from '../mutation-types';

import { setToken } from '../../utils/localStorage';

const user = {
    state: () => ({
        userInfo: {
            name: 'xxx',
            role: ''
        },
        manus: [
            {
                title: '仪表板',
                name: 'dashboard',
                path: '/dashboard',
                component: () => import(`@/views/dashboard/Dashboard.vue`)
            },
            {
                title: '404',
                name: '404',
                path: '/404',
                component: () => import(`@/views/404/404.vue`)
            }
        ]
    }),
    mutations: {
        [USER_INFO](state: any, payload: any) {
            state.userInfo = {
                name: payload.name,
                role: payload.role
            }
        }
    },
    actions: {
        // 登录
        login({ dispatch }: any, data: any) {
            return new Promise((resolve, reject) => {
                setToken('xxxxxxx2022xxxxxxx');
                dispatch('getUserInfo', data).then((res: any) => {
                    resolve("登录成功");
                }).catch((error: any) => reject(error));
            })
        },
        // 获取用户信息
        getUserInfo({ commit, state }: any, data: any) {
            return new Promise((resolve, reject) => {
                commit(USER_INFO, { name: data.name, role: '管理员' });
                resolve("获取用户信息成功");
            })
        }
    }
}

export default user;