# How to 

## Edit the library and test locally with the test application

```
ng build wee-flow --watch
```
Then update files in the library and see the results in the test application
Keep in mind that new methods are not auto detected.

# Troubleshooting

## Fix error loading libXss.so.1m, when running lib tests 

Full error message
```
error while loading shared libraries: libXss.so.1: cannot open shared object file: No such file or directory: ```

Install missing packages on linux, or WSL
```
sudo apt-get update
sudo apt-get install -y libgbm1
```

See here https://techoverflow.net/2018/06/05/how-to-fix-puppetteer-error-while-loading-shared-libraries-libx11-xcb-so-1-cannot-open-shared-object-file-no-such-file-or-directory/
