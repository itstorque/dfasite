#!/bin/bash

echo Kerberos:
read kerberos

#delta ./*
scp -r ./test.txt $kerberos@athena.dialup.mit.edu:/mit/mitdfa/web_scripts/new

echo Done.
