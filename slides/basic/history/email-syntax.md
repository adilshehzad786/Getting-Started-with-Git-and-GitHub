**Almost like an email**

```txt
Fix cost propagation bug

Previously, cost was calculated but not passed to child
nodes resulting in failure to create optimal paths.

Ensure child nodes receive calculated cost to prevent
sub-optimality and failure to converge in results.
```

Note:
- 1st line is like an email _subject_
- rest is like an email _body_
- Fun fact, `git` supports sending changes by email
    - where this convention comes from
    - how `git` and the Linux kernel are still worked on
