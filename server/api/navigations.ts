import { ServerResponse, IncomingMessage } from 'http';
export interface IMenuItem {
    id: number;
    title: string;
    url: string;
    icon?: string;
}
export default async(req: IncomingMessage, res: ServerResponse)  => {
    const menuItems: IMenuItem[] = [
        {
            id: 1,
            title: 'Home',
            url: '/',
            icon: 'home',
        },
        {
            id: 2,
            title: 'Projects',
            url: '/projects',
            icon: 'project',
        },
        {
            id: 3,
            title: 'Demos',
            url: '/demos',
            icon: 'appstore',
        },
        {
            id: 4,
            title: 'Contacts',
            url: '/contacts',
            icon: 'phone',
        }
    ];
    res.writeHead(200, {
        'content-type': 'application/json',
    })
    res.end(JSON.stringify(menuItems));
}
