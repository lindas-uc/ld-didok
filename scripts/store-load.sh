echo https://gitlab.zazuko.com//opentransportdata/ld-didok/-/jobs/$CI_JOB_ID/artifacts/download?private_token=$CI_JOB_TOKEN
#curl -n -X POST -u zazuko:$STORE_PASSWORD --data timeout=1000000  --data-urlencode update="CLEAR GRAPH <http://data.alod.ch/graph/bar> " https://test.lindas-data.ch:8443/alod/update
#curl -n -X POST -u zazuko:$STORE_PASSWORD --data timeout=1000000  --data-urlencode update="LOAD <https://sos-ch-dk-2.exo.io/zazuko-ingress/alod/everything.nt.gz> INTO GRAPH <http://data.alod.ch/graph/bar>" https://test.lindas-data.ch:8443/alod/update