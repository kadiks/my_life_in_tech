curl -d text="A" -d handle="a" -d isPositiveExperience="false" http://localhost:7000/stories
curl -d text="B" -d handle="" -d isPositiveExperience="false" http://localhost:7000/stories

curl -d text="calme et degoute a la x" -d handle="c" -d isPositiveExperience="false" http://localhost:7000/stories

curl http://localhost:7000/stories

curl --request DELETE http://localhost:7000/stories/8JYg2A8EQIhG9Upu

curl -d emotion="hug"  http://localhost:7000/stories/AHXvZoCZWYPJeyMA/reactions
