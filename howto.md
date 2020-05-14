# How to 



## Edit the library and test locally with the test application

```
ng build wee-flow --watch
```
Then update files in the library and see the results in the test application
Keep in mind that new methods are not auto detected.

## Fix error loading libXss.so.1m, when running lib tests 

Full error message
```
error while loading shared libraries: libXss.so.1: cannot open shared object file: No such file or directory: ```

Install missing packages on linux, or WSL
```
sudo apt-get update
sudo apt-get install -y libgbm1
sudo apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

See here https://techoverflow.net/2018/06/05/how-to-fix-puppetteer-error-while-loading-shared-libraries-libx11-xcb-so-1-cannot-open-shared-object-file-no-such-file-or-directory/
