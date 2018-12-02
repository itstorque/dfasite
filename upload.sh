#!/bin/bash

echo Kerberos:
read kerberos

#delta ./mit/mitdfa/web_scripts/test/
scp -r ./* $kerberos@athena.dialup.mit.edu:/mit/mitdfa/testDir

echo Done.
