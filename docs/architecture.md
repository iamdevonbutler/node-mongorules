# Architecture

## Misc notes
- we are normalizing all payloads by converting them to arrays.
we do this for both inserts and updates.
mongodb inserts can accept payloads as both an array and a obj.
when we are done procssing updateArgs converts back to original format.