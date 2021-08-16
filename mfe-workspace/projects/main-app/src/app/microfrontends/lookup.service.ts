import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                remoteEntry: 'http://localhost:6002/remoteEntry.js',
                remoteName: 'product',
                exposedModule: './ProdModule',

                // For Routing
                displayName: 'Product',
                routePath: 'product',
                ngModuleName: 'ProductModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:6002/remoteEntry.js',
                remoteName: 'product',
                exposedModule: './ProdModule',

                // For Routing
                displayName: 'Add Product',
                routePath: 'product/add-product',
                ngModuleName: 'ProductModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:6003/remoteEntry.js',
                remoteName: 'coupon',
                exposedModule: './CoupModule',

                // For Routing
                displayName: 'Coupon',
                routePath: 'coupon',
                ngModuleName: 'CouponModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:6003/remoteEntry.js',
                remoteName: 'coupon',
                exposedModule: './CoupModule',

                // For Routing
                displayName: 'Add Coupon',
                routePath: 'coupon/add-coupon',
                ngModuleName: 'CouponModule'
            }
        ] as Microfrontend[]);
    }
}
