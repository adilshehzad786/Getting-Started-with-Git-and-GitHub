Code commented out with no explanation

```c++
for(int i = 1;i < Ntr;i++){
    if(radius > turn_rad[i-1] &amp;&amp; radius <= turn_rad[i] ){
        int j=1;
        /*
        for(int j = 1; j < Nh; j++) {
                if (theta &gt; heading[j-1]) {
                // cout << "I" << i << endl;
                // cout << "J" << j << endl;

                q11 = torque_in[i-1][j-1];
                q12 = torque_in[i][j-1];
                q21 = torque_in[i-1][j];
                q22 = torque_in[i][j];

                // torque_out = sqrt(q22 - q12) * q22/q11;
                torque_out = abs(sqrt(q22 - q12) * q22/q11);

                cout << "T_Out:" << t_out << endl;
            }
        }
        // Power = data[ i-1+Ntr ] + (radius-data[i-1]);
        */
        // Inner torque calculations
        q11 = torque_in[i-1][0];
        q22 = torque_in[i][0];
        torque_out = q22/q11;
    }
}
```
