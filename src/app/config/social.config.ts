import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

export const socialConfig: any = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: true,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '423289561319-0990rk1gfcrj0ihs1brrkciss9jusbsl.apps.googleusercontent.com'
        ),
      },
    ],
  } as SocialAuthServiceConfig,
};
